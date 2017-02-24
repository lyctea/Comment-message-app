import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, Link, IndexRoute, Redirect, browserHistory} from 'react-router';

// 按需加载组件 require.ensure(dependencies, callback, chunkName)
// 这是 webpack 提供的方法，这也是按需加载的核心方法。第一个参数是依赖，
// 第二个是回调函数，第三个就是上面提到的 chunkName，用来指定这个
// chunk file 的 name。

const IndexList = {
    path: 'indexlist',
    getComponent(nextState, cb){
        require.ensure([], (require)=> {
            return cb(null, require('../Containers/indexList'))
        }, 'indexList')
    }
}
const Login = {
    path: '/login',
    getComponent(nextState, cb){
        require.ensure([], (require)=> {
            return cb(null, require('../Component/Login'))
        }, 'login')
    }
}

const ArticleDetail = {
    path: '/indexList/:id',
    getComponent(nextState, cb){
        require.ensure([], (require)=> {
            return cb(null, require('../Containers/articleDetail'))
        }, 'articleDetail')
    }
}

const Create = {
    path: 'create',
    getComponent(nextState, cb){
        require.ensure([], (require)=> {
            return cb(null, require('../Component/Create'))
        }, 'create')
    },
}

const CreateDetail = {
    path: 'create/:id',
    getComponent(nextState, cb){
        require.ensure([], (require)=> {
            return cb(null, require('../Component/Create'))
        }, 'createDetail')
    },
}

const Me = {
    path: '/me',
    getComponent(nextState, cb){
        require.ensure([], (require)=> {
            return cb(null, require('../Component/Me'))
        }, 'me')
    }
}

const MyArticle = {
    path: 'myArticle',
    getComponent(nextState, cb){
        require.ensure([], (require)=> {
            return cb(null, require('../Component/Me/myArticle'))
        }, 'myArticle')
    }
}


module.exports = {
    IndexList: IndexList,
    Login: Login,
    ArticleDetail: ArticleDetail,
    Create: Create,
    Me: Me,
    MyArticle: MyArticle,
    CreateDetail: CreateDetail
};