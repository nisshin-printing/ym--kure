/**
 * Project info config object
 *
 * All params optional unless
 * otherwise noted
 *
 * @params {
 *  string name         (required) The built theme dirname and the theme text-domain
 *  string prettyName   (required) The theme name as shown in the theme selector admin
 *  string themeURI     The theme's URI
 *  string description  A short description of the theme
 *  string parentTheme  If this is a child theme, then put the parent
 *                      theme's directory name here
 *  string version      The theme's version
 *  string author       The theme's author
 *  string authorURI    The theme author's URI
 *  string license      The theme's license
 *  string licenseURI   The theme license's URI
 *  array  tags         Keywords that could be associated with the theme
 * }
 */
module.exports = {
    name: 'ym--tokyo',
    prettyName: 'ym--tokyo',
    themeURI: 'http://shib.law-yamashita.local/',
    description: '支部サイト用WordPressテーマ統一デザイン案',
    version: '0.1.0',
    author: 'Kazuki Fukuda <info@dtdsh.com>',
    authorURI: 'https://dtdsh.com/',
    license: 'GPLv2 or later',
    tags: ['山下江法律事務所', 'Yamashita Ko Law Office', 'satellite', '専門サイト']
};
