// admin/services/nations_services.js
import nationRepository from '../repositories/nations_repositories.js';
import { Op } from 'sequelize';

/**
 * Obtener todas las naciones
 */
export const fetchAll = async () => {
  const nations = await nationRepository.findAll();

  return nations.map(nation => nation.toJSON());
};

export const fetchAllPaginated = async (page = 1, limit = 10, name = '') => {
  const offset = (page - 1) * limit;
  
  // Construir filtros
  const whereClause = {};
  if (name) {
    whereClause.name = {
      [Op.iLike]: `%${name}%`
    };
  }

  // Obtener total de registros
  const total = await nationRepository.count(whereClause);
  
  // Obtener registros paginados
  const nations = await nationRepository.findAllPaginated({
    where: whereClause,
    offset: offset,
    limit: limit,
    order: [['id', 'DESC']]
  });

  const totalPages = Math.ceil(total / limit);
  const offsetResult = offset;

  return {
    nations: nations.map(nation => nation.toJSON()),
    total,
    totalPages,
    offset: offsetResult,
    page,
    limit
  };
};

/**
 * Obtener una nación por su ID
 */
export const fetchById = async (id) => {
  const nation = await nationRepository.findById(id);

  if (!nation) {
    return null; // O lanzar un error personalizado si prefieres
  }

  return nation.toJSON();
};

/**
 * Servicio para crear una nación
 */
export const create = async (data) => {
  const newNation = await nationRepository.create(data);
  return newNation.toJSON();
};

/**
 * Servicio para actualizar una nación
 */
export const update = async (id, data) => {
  const updatedNation = await nationRepository.update(id, data);
  if (!updatedNation) return null;
  return updatedNation.toJSON();
};

/**
 * Servicio para eliminar una nación
 */
export const remove = async (id) => {
  return await nationRepository.delete(id);
};