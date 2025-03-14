import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { validarCategoria } from "../../Hellpers/Validaciones";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";

const CrearProducto = () => {
  const ProductoSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "minimo 3 caracteres")
      .max(50, "maximo 50 caracteres")
      .required("El campo Nombre es requerido"),
    marca: Yup.string()
      .min(2, "minimo dos caracteres")
      .max(20, "maximo 20 caracteres")
      .required("El campo Marca es requerido"),
    tamaño: Yup.string()
      .min(2, "minimo dos caracteres")
      .max(7, "maximo siete caracteres")
      .required("El campo tamaño es requerido"),
    stock: Yup.number()
      .min(1, "Ingrese al menos un numero")
      .max(10, "No es posible ingresar mas de diez caracteres")
      .required("El campo stock es requerido"),
    categoria: Yup.string().required("Seleccione una categoria"),
    precio: Yup.number()
      .min(3, "minimo tres caracteres")
      .max(20, "maximo 20 caracteres")
      .required("El campo precio es requerido"),
  });

  const initialValues = {
    nombre: "",
    marca: "",
    tamaño: "",
    stock: "",
    categoria: "",
    precio: "",
  };

  const formik = useFormik({
    initialValues,
    ValidationSchema: ProductoSchema,
    ValidateOnBlur: true,
    ValidateOnChange: true,
    onSubmit: (values) => {
      console.log("Values de formik ", values);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Desde submit");
    const nuevoProducto = {
      nombre: name,
      marca: brand,
      tamaño: size,
      stock: stock,
      categoria: category,
      precio: price,
    };
    console.log("Nuevo Producto", nuevoProducto);
  };

  return (
    <div>
      <h1 className="text-center">Crear Nuevo Producto</h1>
      <div className="container py-4 my-2">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre del producto"
              required
              minLength={4}
              maxLength={50}
              name="nombre"
              {...formik.getFieldProps("nombre")}
              className={clsx(
                "form-control",
                {
                  "is-invalid": formik.touched.nombre && formik.errors.nombre,
                },
                {
                  "is-valid": formik.touched.nombre && !formik.errors.nombre,
                }
              )}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="brand">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la marca del producto"
              required
              minLength={4}
              maxLength={50}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="size">
            <Form.Label>Tamaño</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el peso o volumen del producto por ej.: 1l o 1kg o 500g"
              required
              minLength={2}
              maxLength={10}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="stock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese el stock del producto"
              required
              minLength={1}
              maxLength={5}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              aria-label="category"
              
            >
              <option value="">Seleccione una categoria</option>
              <option value="almacen">Almacen</option>
              <option value="limpieza">Limpieza</option>
              <option value="bebidas">Bebidas</option>
              <option value="perfumeria">Perfumeria</option>
              <option value="lacteos">Lacteos</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese el stock del producto"
              required
              minLength={1}
              maxLength={7}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Crear Producto
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CrearProducto;
