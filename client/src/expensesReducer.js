export function expensesReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]
    case 'delete':
      return state.filter((e) => e.id !== action.payload)
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}
