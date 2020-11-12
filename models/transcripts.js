module.exports = (sequelize, DataTypes) => sequelize.define('transcripts', {
  mediaId: { type: DataTypes.INTEGER, allowNull: false },
  groupId: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  speakerCount: { type: DataTypes.INTEGER, allowNull: false },
  track: { type: DataTypes.JSON, allowNull: true },
  transcript: { type: DataTypes.JSON, allowNull: true },
  result: { type: DataTypes.JSON, allowNull: true },
  status: { type: DataTypes.STRING, allowNull: true },
  resultUpdatedAt: { type: DataTypes.DATE, allowNull: true },
  createdAt: { type: DataTypes.DATE, allowNull: false },
}, {
  underscored: true,
  freezeTableName: true,
  timestamps: false,
});
