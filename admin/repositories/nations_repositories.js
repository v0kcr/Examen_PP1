// admin/repositories/nations_repositories.js
import Nation from '../models/nation.js';
import { Op } from 'sequelize';

const showLogs = process.env.SHOW_DB_ERRORS === 'true' || process.env.NODE_ENV === 'development';

class NationRepository {
  /**
   * Obtiene todos los registros
   */
  async findAll() {
    try {
      return await Nation.findAll();
    } catch (error) {
      if (showLogs) console.error('🔥 [NationRepo.findAll] Error:', error);
      throw error;
    }
  }

  /**
   * Obtiene registros con paginación
   */
  async findAllPaginated(options = {}) {
    try {
      const { where = {}, offset = 0, limit = 10, order = [['id', 'DESC']] } = options;
      return await Nation.findAll({
        where,
        offset,
        limit,
        order
      });
    } catch (error) {
      if (showLogs) console.error('🔥 [NationRepo.findAllPaginated] Error:', error);
      throw error;
    }
  }

  /**
   * Cuenta registros con filtros
   */
  async count(where = {}) {
    try {
      return await Nation.count({ where });
    } catch (error) {
      if (showLogs) console.error('🔥 [NationRepo.count] Error:', error);
      throw error;
    }
  }

  /**
   * Busca nación por ID
   */
  async findById(id) {
    try {
      return await Nation.findByPk(id);
    } catch (error) {
      if (showLogs) console.error(`🔥 [NationRepo.findById] Error (id: ${id}):`, error);
      throw error;
    }
  }

  /**
   * Crea un nuevo registro
   */
  async create(data) {
    try {
      return await Nation.create(data);
    } catch (error) {
      if (showLogs) console.error('🔥 [NationRepo.create] Error:', error);
      throw error;
    }
  }

  /**
   * Actualiza un registro por ID
   */
  async update(id, data) {
    try {
      const nation = await Nation.findByPk(id);
      if (!nation) return null;
      return await nation.update(data);
    } catch (error) {
      if (showLogs) console.error(`🔥 [NationRepo.update] Error (id: ${id}):`, error);
      throw error;
    }
  }

  /**
   * Elimina un registro por ID
   */
  async delete(id) {
    try {
      const nation = await Nation.findByPk(id);
      if (!nation) return null;
      await nation.destroy();
      return true;
    } catch (error) {
      if (showLogs) console.error(`🔥 [NationRepo.delete] Error (id: ${id}):`, error);
      throw error;
    }
  }
}

export default new NationRepository();