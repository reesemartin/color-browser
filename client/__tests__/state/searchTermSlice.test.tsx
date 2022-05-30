import { describe, it, expect } from 'vitest'
import { AnyAction, createAction } from '@reduxjs/toolkit'
import reducer, { updateSearchTerm } from '../../src/state/searchTermSlice'


describe('searchTermSlice', () => {
  it('should return the initial state on init', () => {
    const previousState: string = 'test'
    expect(reducer(previousState, createAction<AnyAction>(''))).toEqual(previousState)
  })

  it('should handle updating the search term', () => {
    const previousState: string = ''
    expect(reducer(previousState, updateSearchTerm('test'))).toEqual('test')
  })
})
