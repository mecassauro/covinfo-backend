import Person from '../models/Person';
import Comorbidity from '../models/Comorbidity';
import PersonComorbidity from '../models/PersonComorbidity';
import Phone from '../models/Phone';
import Address from '../models/Address';
import AppError from '../../errors/AppError';

class GetUserFormService {
  async execute(form) {
    try {
      const userForm = await Person.findOne({
        include: [
          {
            model: Phone,
            attributes: ['id', 'phone_code', 'phone_number'],
          },
          {
            model: Address,
            attributes: [
              'id',
              'zip_code',
              'city',
              'state',
              'street',
              'house_number',
              'home_situation',
              'lat',
              'lng',
            ],
          },
          {
            model: Comorbidity,
            as: 'Comorbidities',
            required: false,
            attributes: ['id', 'comorbidity_description'],
            through: {
              model: PersonComorbidity,
              as: 'personComobidity',
              attributes: [],
            },
          },
        ],
        attributes: [
          'id',
          'document_number',
          'birth_date',
          'nationality',
          'birth_city',
          'birth_state',
          'sex',
          'breed',
          'mother_name',
          'father_name',
          'quantity_per_home',
          'activated_status',
        ],
        where: { user_id: form.user_id },
      });

      return userForm;
    } catch (error) {
      throw new AppError(
        'OPS! Erro ao tentar buscar informações do usuario.',
        500
      );
    }
  }
}

export default GetUserFormService;
