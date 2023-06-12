const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EsLintPlugin = require("eslint-webpack-plugin");

module.exports = {
	devtool: "source-map",
	devServer: {
		host: "localhost",
		port: "3000",
		hot: true,
		historyApiFallback: true,
	},
	entry: {
		main: path.resolve(__dirname, "src/index.tsx"),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(s*)css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
			favicon: "public/favicon.ico",
			inject: true,
		}),
		new MiniCssExtractPlugin(),
		new EsLintPlugin({
			extensions: ["ts", "tsx"],
		}),
	],
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
		alias: {
			"@components": path.resolve(__dirname, "src/components/"),
			"@pages": path.resolve(__dirname, "src/pages/"),
			"@static": path.resolve(__dirname, "public/"),
			"@helpers": path.resolve(__dirname, "src/utils/helpers/"),
		},
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
	},
};
