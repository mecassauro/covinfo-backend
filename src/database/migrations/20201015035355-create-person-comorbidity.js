module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('person_comorbidity', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      person: {
        type: Sequelize.INTEGER,
        references: { model: 'person', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      comorbidity: {
        type: Sequelize.INTEGER,
        references: { model: 'comorbidity', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('person_comorbidity');
  }
};
