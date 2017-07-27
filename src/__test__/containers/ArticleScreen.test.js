//React
import React from 'react';
//Components
import { ArticleScreen } from '../../containers/ArticleScreen';
//Redux
import initialState from '../../reducers/initialState';
//Testing
import { shallow } from 'enzyme';

describe('ArticleScreen Container', () => {
    let wrapper, props, instance;

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