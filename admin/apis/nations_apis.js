import * as nationService from '../services/nations_services.js';

export function test(req, res) {
  return res.json({
    success: true,
    message: 'Active session',
    data: ':)'
  });
}

export async function listNations(req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const name = req.query.name || '';

    console.log(`Listando naciones - Página: ${page}, Límite: ${limit}, Filtro: ${name}`);

    // Llamamos al servicio con paginación
    const result = await nationService.fetchAllPaginated(page, limit, name);

    return res.status(200).json({
      success: true,
      message: 'Naciones listadas con éxito',
      data: {
        list: result.nations,
        total: result.total,
        pages: result.totalPages,
        offset: result.offset,
        limit: limit,
        page: page
      },
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al listar las naciones',
      data: null,
      error: error.message
    });
  }
}

/**
 * Guardar cambios múltiples (nuevos, editados, eliminados)
 */
export async function saveNations(req, res, next) {
  try {
    const { news = [], edits = [], deletes = [] } = req.body;

    console.log('Guardando cambios - Nuevos:', news.length, 'Editados:', edits.length, 'Eliminados:', deletes.length);

    // Procesar eliminaciones
    for (const id of deletes) {
      await nationService.remove(id);
    }

    // Procesar ediciones
    for (const edit of edits) {
      await nationService.update(edit.id, { name: edit.name });
    }

    // Procesar nuevas naciones
    const created = [];
    for (const newNation of news) {
      const createdNation = await nationService.create({ name: newNation.name });
      // Guardar la relación entre el ID temporal y el real
      created.push({
        tmp: newNation.id,
        id: createdNation.id
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Naciones guardadas con éxito',
      data: created,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al guardar las naciones',
      data: null,
      error: error.message
    });
  }
}

/**
 * Obtener una nación por su ID (ej. /api/nations/:id)
 */
export async function getNationById(req, res, next) {
  try {
    const { id } = req.params;
    const nation = await nationService.fetchById(id);

    // Validación si no existe el registro en la BD
    if (!nation) {
      return res.status(404).json({
        success: false,
        message: 'Nación no encontrada',
        data: null,
        error: `No existe la nación con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Nación obtenida con éxito',
      data: nation,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al buscar la nación',
      data: null,
      error: error.message
    });
  }
}

/**
 * Crear una nueva nación (POST)
 */
export async function createNation(req, res) {
  try {
    console.log('0 ++++++++++++++++++++')
    console.log(req.body)
    const newNation = await nationService.create(req.body);
    console.log('1 ++++++++++++++++++++')
    console.log(newNation)
    console.log('2 ++++++++++++++++++++')
    return res.status(201).json({
      success: true,
      message: 'Nación creada con éxito',
      data: newNation,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al crear la nación',
      data: null,
      error: error.message
    });
  }
}

/**
 * Actualizar una nación existente (PUT)
 */
export async function updateNation(req, res) {
  try {
    const { id } = req.params;
    const updatedNation = await nationService.update(id, req.body);

    if (!updatedNation) {
      return res.status(404).json({
        success: false,
        message: 'Nación no encontrada',
        data: null,
        error: `No existe la nación con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Nación actualizada con éxito',
      data: updatedNation,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al actualizar la nación',
      data: null,
      error: error.message
    });
  }
}

/**
 * Eliminar una nación (DELETE)
 */
export async function deleteNation(req, res) {
  try {
    const { id } = req.params;
    const deleted = await nationService.remove(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Nación no encontrada',
        data: null,
        error: `No existe la nación con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Nación eliminada con éxito',
      data: null,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al eliminar la nación',
      data: null,
      error: error.message
    });
  }
}