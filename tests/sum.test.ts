import {describe, expect, test} from '@jest/globals';
import Matemagica from '../src/matemagica'


describe('Somar dois numeros', () => {

    test('Deve somar dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.SetA(2)
        matemagica.SetB(1)

        expect(matemagica.GetSum()).toBe(3)
    })
})