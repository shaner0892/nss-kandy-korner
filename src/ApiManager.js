export const getCustomerPurchases = () => {
    return fetch("http://localhost:8088/purchases?_expand=product&_expand=customer&_expand=location&_expand=employee")
        .then(res => res.json())
}

export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
    .then(res => res.json())
}

export const getAllLocations = () => {
    return fetch("http://localhost:8088/locations")
    .then(res => res.json())
}

export const getAllProducts = () => {
    return fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=asc")
    .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=location")
    .then(res => res.json())
}