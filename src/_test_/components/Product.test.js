import React  from 'react';
import { mount , shallow } from 'enzyme';
import ProviderMock  from '../../_mocks_/ProviderMock';
import Product from '../../components/Product';
import ProductMock from '../../_mocks_/ProductMock';

describe ('<Product/>',()=>{
    test('Render del componente Product ', () => {
        const product = shallow (
            <ProviderMock>
                <Product/>
            </ProviderMock>
        );
        expect(product.length).toEqual(1);

    });
    test('Comprobar el boton de comprar', () => {
        const handleAddToCart = jest.fn();
        const wapper = mount (
            <ProviderMock>
                <Product
                    product={ProductMock}
                    handleAddToCart={handleAddToCart}
                />
            </ProviderMock>
        );
        wapper.find('button').simulate('click');
        expect(handleAddToCart).toHaveBeenCalledTimes(1);
    })
    
    


});