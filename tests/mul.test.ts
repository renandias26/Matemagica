import {describe, expect, test} from '@jest/globals';
import Matemagica from '../src/matemagica'


describe('Somar dois numeros', () => {

    test('Deve somar dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.SetA(2)
        matemagica.SetB(2)

        expect(matemagica.GetMul()).toBe(4)
    })
})