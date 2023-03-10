const HtmlWebpackPlugin = require("html-webpack-plugin")

const path=require("path")

module.exports={
    mode:'development',
    entry:"/src/index.js",
    watch:true,
    output:{
        path:path.join(__dirname,"/public"),
        filename:"main.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"template.ejs",
            filename:"template/index.ejs"
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                //exclude:/node_module/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.(js|jsx)$/i,
                exclude:/node_module/,
                use:{
                    loader:`babel-loader`,
                }
            },
        ],
    },
}