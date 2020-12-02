import RandomNumber from "../../src/components/RandomNumber";
import { mount } from '@vue/test-utils';

describe('RandumNumber', () => {
    test('By default, randomNumber data value should be 0', () => {
        const wrapper = mount(RandomNumber);
        expect(wrapper.html()).toContain('<span>0</span>');
    });
});

describe('RandumNumber', () => {
    test('If button is clicked, randomNumber data value should between 1 and 10', async () => {
        const wrapper = mount(RandomNumber);
        wrapper.find('button').trigger('click')
        await wrapper.vm.$nextTick()
        const randomNumber = parseInt(wrapper.find('span').element.textContent)
        expect(randomNumber).toBeGreaterThanOrEqual(1);
        expect(randomNumber).toBeLessThanOrEqual(10);
    });
});

describe('RandumNumber', () => {
    test('If button is clicked, randomNumber data value should be 200 and 300', async () => {
        const wrapper = mount(RandomNumber, {
            propsData: {
                min: 200, 
                max: 300
            }
        });
        wrapper.find('button').trigger('click')
        await wrapper.vm.$nextTick()
        const randomNumber = parseInt(wrapper.find('span').element.textContent)
        expect(randomNumber).toBeGreaterThanOrEqual(200);
        expect(randomNumber).toBeLessThanOrEqual(300);
    });
});