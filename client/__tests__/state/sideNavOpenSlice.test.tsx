import { describe, it, expect } from 'vitest'
import { AnyAction, createAction } from '@reduxjs/toolkit'
import reducer, { updateSideNavOpen } from '../../src/state/sideNavOpenSlice'

describe('searchTermSlice', () => {
  it('should return the initial state on init', () => {
    const previousState: boolean = false
    expect(reducer(previousState, createAction<AnyAction>(''))).toEqual(previousState)
  })

  it('should handle updating the search term', () => {
    const previousState: boolean = false
    expect(reducer(previousState, updateSideNavOpen(true))).toEqual(true)
  })
})
