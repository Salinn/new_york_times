//React
import React from 'react';
//Components
import ArticleScreenConnected, { ArticleScreen } from '../../containers/ArticleScreen';
//Redux
import configureStore  from 'redux-mock-store';
import initialState from '../../reducers/initialState';
//Testing
import { mount, shallow } from 'enzyme';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('ArticleScreen Container', () => {
    let wrapper, store, props, instance;

    it('should contain a componet called articles', () => {
        store = mockStore(initialState);

        wrapper = mount(<ArticleScreenConnected store={store} />);

        const articles = wrapper.find('Articles');
        expect(articles.length).toBe(1);
    });

    it('should trigger the action methods when called', () => {
        props = {
            articles: initialState.articles,
            actions: {
                toggleFullArticle: jest.fn(),
                lastSetOfArticles: jest.fn(),
                nextSetOfArticles: jest.fn(),
                inputChanged: jest.fn(),
            }
        };

        wrapper = shallow(<ArticleScreen {...props} />);
        instance = wrapper.instance();

        instance.toggleFullArticle('http://www.somewebsite.com/articles/a-cool-article');
        expect(props.actions.toggleFullArticle).toHaveBeenCalledWith({ web_url: 'http://www.somewebsite.com/articles/a-cool-article' });

        instance.lastSetOfArticles({ searchFields: initialState.articles.searchFields });
        expect(props.actions.lastSetOfArticles).toHaveBeenCalledWith({ searchFields: initialState.articles.searchFields });

        instance.nextSetOfArticles({ searchFields: initialState.articles.searchFields });
        expect(props.actions.nextSetOfArticles).toHaveBeenCalledWith({searchFields: initialState.articles.searchFields });

        instance.onUserInput({ target: { name: 'q', value: 'star wars', pattern: 'DEFAULT' } });
        expect(props.actions.inputChanged).toHaveBeenCalledWith({ name: 'q', value: 'star wars', pattern: 'DEFAULT' });
    });
});