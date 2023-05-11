import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { getAllProductsThunk } from '../../store/slices/products.slice'
import { useDispatch } from 'react-redux'
import "./styles/filterCategory.css"

const FilterCategory = () => {


    const [categoryIsClose, setCategoryIsClose] = useState(true)
    const dispatch = useDispatch()

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/categories`
    const [categories, getAllCategories] = useFetch(url)


    useEffect(() => {
        getAllCategories()
    }, [])

    const handleClickCategories = id => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
        dispatch(getAllProductsThunk(url))
    }

    const handleClickAllProducts = () => {
        dispatch(getAllProductsThunk())

    }

    const handleCategoryClose = () => {
        setCategoryIsClose(!categoryIsClose)
    }

    return (
        <article className='filtercategory'>
            <div className='filtercategory_title-container' >
                <h3 className='filtercategory_title'>Category</h3>
                <i className='filtercategory_open bx bx-chevron-down' onClick={handleCategoryClose}></i>
            </div>

            <hr className='filtercategory_hr' />

            <ul className={`filtercategory_list ${categoryIsClose ? "filtercategory_list-closed" : ""}`}>
                <li className='filtercategory_list-item' onClick={handleClickAllProducts}>AllProducts</li>
                {
                    categories?.map(category => (
                        <li className='filtercategory_list-item' onClick={() => handleClickCategories(category.id)} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>

        </article>
    )
}

export default FilterCategory