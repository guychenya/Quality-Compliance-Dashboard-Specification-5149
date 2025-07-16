import { useState, useEffect } from 'react'
import { supabase } from '../config/supabase'

export const useSupabase = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const executeQuery = async (queryFn) => {
    setLoading(true)
    setError(null)
    
    try {
      const result = await queryFn()
      return result
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  // CRUD Operations
  const create = async (table, data) => {
    return executeQuery(async () => {
      const { data: result, error } = await supabase
        .from(table)
        .insert(data)
        .select()
      
      if (error) throw error
      return result
    })
  }

  const read = async (table, filters = {}) => {
    return executeQuery(async () => {
      let query = supabase.from(table).select('*')
      
      Object.entries(filters).forEach(([key, value]) => {
        query = query.eq(key, value)
      })
      
      const { data, error } = await query
      
      if (error) throw error
      return data
    })
  }

  const update = async (table, id, data) => {
    return executeQuery(async () => {
      const { data: result, error } = await supabase
        .from(table)
        .update(data)
        .eq('id', id)
        .select()
      
      if (error) throw error
      return result
    })
  }

  const remove = async (table, id) => {
    return executeQuery(async () => {
      const { error } = await supabase
        .from(table)
        .delete()
        .eq('id', id)
      
      if (error) throw error
      return true
    })
  }

  return {
    loading,
    error,
    create,
    read,
    update,
    remove,
    supabase
  }
}