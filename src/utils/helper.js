export function filterData(searchText, allrestaurants) {
    return allrestaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))

}