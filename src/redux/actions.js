export const add = item => ({
    type: "ADD",
    item
})

export const remove = itemId => ({
    type: "REMOVE",
    itemId
})