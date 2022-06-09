# useForm Hook

Ejemplo de uso:
```
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };
    
    const [ values, handleImputChange, reset ] = useForm( initialForm );
```

 useCounter() // recibe un valor por defecto