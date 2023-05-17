import {describe, expect, test} from '@jest/globals';
import Matemagica from '../src/matemagica'


describe('Somar dois numeros', () => {

    test('Deve somar dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.SetA(6)
        matemagica.SetB(3)

        expect(matemagica.GetDiv()).toBe(2)
    })
})