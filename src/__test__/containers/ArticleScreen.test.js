//React
import React from 'react';
//Components
import { ArticleScreen } from '../../containers/ArticleScreen';
//Redux
import { Provider } from 'react-redux';
import configureStore  from 'redux-mock-store';
import initialState from '../../reducers/initialState';
//Testing
import { shallow, mount } from 'enzyme';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('ArticleScreen Container', () => {
    let wrapper, props, instance, store;

    // it('matches screen shot', () => {
    //     store = mockStore(initialState.articles);
    //
    //     wrapper = mount(
    //         <Provider store={ store }>
    //             <ArticleScreen />
    //         </Provider>);
    //
    //     const apps = wrapper.find('App');
    //     expect(apps.length).toBe(1);
    // });

    it('should trigger the action methods when called', () => {
        props = {
            articles: initialState.articles,
            actions: {
                toggleFullArticle: jest.fn(),
                lastSetOfArticles: jest.fn(),
                nextSetOfArticles: jest.fn(),
                searchInput: jest.fn(),
                changeArticles: jest.fn(),
                fetchArticles: jest.fn(),
            }
        };

        const searchFields = initialState.articles.searchFields;

        wrapper = shallow(<ArticleScreen {...props} />);
        instance = wrapper.instance();

        instance.toggleFullArticle('http://www.somewebsite.com/articles/a-cool-article');
        expect(props.actions.toggleFullArticle).toHaveBeenCalledWith({ web_url: 'http://www.somewebsite.com/articles/a-cool-article' });

        instance.lastSetOfArticles();
        expect(props.actions.lastSetOfArticles).toHaveBeenCalledWith({ page: 0 });

        instance.nextSetOfArticles();
        expect(props.actions.nextSetOfArticles).toHaveBeenCalledWith({ page: 0 });

        instance.searchInput({ target: { value: 'star wars' } });
        expect(props.actions.searchInput).toHaveBeenCalledWith({ value: 'star wars', searchFields });

        instance.changeArticles({ pageName: 'World' });
        expect(props.actions.changeArticles).toHaveBeenCalledWith({ pageName: 'World', searchFields });
    });
});