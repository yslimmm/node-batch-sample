const signale = require('signale').scope('track.batch');
const { database } = require('../models/index');

const selectTranscriptsError = (jobTransaction) => new Promise((resolve, reject) => {
	database.transcripts
    .findAll({
			attributes: ['id', 'media_id', 'speaker_count', 'status'],
      where: {
        status: 'error'
      }
    })
    .then((transcripts) => {
			signale.info(`[${jobTransaction}] find transcripts errorList, [${JSON.stringify(transcripts)}]`);
			resolve(transcripts);
    })
    .catch(error => {
      reject(Error(error));
    });
});

const retry = (jobTransaction, cursor) => new Promise((resolve, reject) => {
	signale.info(`[${jobTransaction}] retry item, ${JSON.stringify(cursor)}`);
	resolve(null);
});

const job = (jobTransaction) => new Promise((resolve, reject) => {
	signale.info(`[${jobTransaction}] job working...`);
	
	let errorTranscriptsPromises = [];
	selectTranscriptsError(jobTransaction)
		.then((errorList) => {
			if(errorList !== undefined && errorList.length == 0) {
				signale.success(`[${jobTransaction}] transcripts error List size is 0. Nothing to do the batch.`);
			return;
			}
			errorList.forEach((cursor) => {
			 	errorTranscriptsPromises.push(retry(jobTransaction, cursor));
			});
		})
		.catch((error) => {
			reject(Error(error));
		});
	
	Promise.all(errorTranscriptsPromises)
		.then(result => {
			signale.success(`[${jobTransaction}] success batch.`);
		})
		.catch(error => {
			reject(Error(error));
		});
});

module.exports = {
	job
};