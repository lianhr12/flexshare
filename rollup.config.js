'use strict';
// 查找外部模块
import resolve from 'rollup-plugin-node-resolve';
// 将Commonjs模块转换成ES2015模块
import commonjs from 'rollup-plugin-commonjs';
// rollup提供的babel编译插件
import babel from 'rollup-plugin-babel';
// 压缩文件
import uglify from 'rollup-plugin-uglify';

export default [{
    input: 'src/main.js', // 入口文件
    output: {
        file: 'dist/flexshare.js', // 输出的文件路径
        name: 'FlexShare', // 生成UMD模块的名字
        format: 'umd' // 输出的文件类型：amd, cjs, es, iife, umd(amd, cjs,iife的合体)
    },
    plugins: [
        resolve({
            // 将自定义选项传递给解析插件
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**' // 编译排除module文件夹
        })
    ],
    // 指出那些模块视为外部模块，不会打包到库中去
    external: ['lodash'],
    watch: {
        // 限制监听的文件路径
        include: 'src/**',
        // 排除监听的文件夹变动
        exclude: 'node_modules/**'
    }
},{
    input: 'src/main.js', // 入口文件
    output: {
        file: 'dist/flexshare.min.js', // 输出的文件路径
        name: 'FlexShare', // 生成UMD模块的名字
        format: 'umd' // 输出的文件类型：amd, cjs, es, iife, umd(amd, cjs,iife的合体)
    },
    plugins: [
        resolve({
            // 将自定义选项传递给解析插件
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        commonjs(),
        uglify(), // 压缩文件
        babel({
            exclude: 'node_modules/**' // 编译排除module文件夹
        })
    ],
    // 指出那些模块视为外部模块，不会打包到库中去
    external: ['lodash'],
    watch: {
        // 限制监听的文件路径
        include: 'src/**',
        // 排除监听的文件夹变动
        exclude: 'node_modules/**'
    }
}];