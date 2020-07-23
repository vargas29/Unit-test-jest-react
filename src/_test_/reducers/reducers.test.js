import reducer from '../../reducers';
import ProductMock from '../../_mocks_/ProductMock';
 
describe('Reducers',()=>{
    
    test('Retornar initial State ', () => {
        expect(reducer({ },'')).toEqual({});
    });

    test('ADD_TO_CART',()=>{
        const initialState ={
            cart:[],
        }

        const payload = ProductMock;
        const action ={
            type : 'ADD_TO_CART',
            payload,
        };

        const expected ={
            cart :[
                ProductMock,
            ],
        };

        expect(reducer(initialState,action)).toEqual(expected);
    });
    
})