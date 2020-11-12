const config = require('./config');
const signale = require('signale').scope('track.batch');
const schedule = require('node-schedule');
const uuidV4 = require('uuid/v4');

const scheduleService = require('./scheduler/scheduleService');

const scheduleCron = process.env.SCHEDULE_CRON || config.scheduleCron;
const serverUrl = process.env.APM_SERVER_URL || config.apmServerUrl;
const apm = require('elastic-apm-node').start({
  serverUrl,
  usePathAsTransactionName: true,
  captureBody: 'all',
});

apm.handleUncaughtExceptions((err) => {
  signale.error(`handleUncaughtExceptions : ${err}`);
  apm.captureError(err);
});

const app = schedule.scheduleJob(scheduleCron, function() {
  const jobTransaction = uuidV4().split('-')[4];
  signale.start(`[${jobTransaction}] start job.`);
  scheduleService.job(jobTransaction);
});

module.exports = app;