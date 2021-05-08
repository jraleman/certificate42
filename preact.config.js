export default (config, env, helpers, options) => {
    const rule = {
        test: /\.(otf|pdf)$/,
        loader: 'file-loader'
    }
    config.module.rules.push(rule);
    config.output.publicPath = env.production ? '/certificate42/' : '/';
}