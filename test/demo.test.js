describe('Pruebas en <Democomponet />', () => {
    test('Esta prueba no debe fallar', () => {
  
        const message1 = 'hola znene'
    
        const message2 = message1.trim()
    
        expect( message1).toBe(message2)
    })
})
