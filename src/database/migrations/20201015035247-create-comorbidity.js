module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('comorbidity', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      comorbidity_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comorbidity');
  }
};
