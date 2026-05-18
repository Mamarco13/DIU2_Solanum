import imgMatcha from '../../assets/Home - café matcha.png'
import imgToast from '../../assets/Home - saturno toast.png'
import imgCafes from '../../assets/Manú - Cafés.png'
import fondoTarjeta from '../../assets/Home - fondo tarjeta.png'

export const menuItems = [
  {
    id: 1,
    name: 'Galaxy Matcha',
    price: 4.80,
    description: 'Matcha premium con leche de avena y notas suaves de vainilla.',
    category: 'Bebidas destacadas',
    tags: ['Avena', 'Matcha', 'Vegetariano'],
    allergens: ['vegano', 'sin_lactosa'],
    image: imgMatcha
  },
  {
    id: 2,
    name: 'Orbit Caramel',
    price: 4.60,
    description: 'Espresso doble con leche cremosa y caramelo tostado.',
    category: 'Bebidas destacadas',
    tags: ['Lactosa', 'Caramelo', 'Espresso'],
    allergens: ['gluten_free'],
    image: imgCafes
  },
  {
    id: 3,
    name: 'Nebula Latte',
    price: 4.20,
    description: 'Café de especialidad con leche vaporizada y espuma cremosa.',
    category: 'Bebidas destacadas',
    tags: ['Lactosa', 'Caliente', 'Latte'],
    allergens: ['gluten_free'],
    image: imgCafes
  },
  {
    id: 4,
    name: 'Saturn Toast',
    price: 7.50,
    description: 'Pan rústico con aguacate, tomate cherry, y semillas.',
    category: 'Comidas',
    tags: ['Aguacate', 'Tostada', 'Vegano'],
    allergens: ['vegano', 'sin_lactosa'],
    image: imgToast
  }
]

