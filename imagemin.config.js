module.exports = {
    gifsicle: {
        optimizationLevel: 2,
        interlaced: false
    },
    mozjpeg: {
        progressive: true,
        quality: 80
    },
    pngquant: { quality: [0.6, 0.8] },
    svgo: {
        plugins: [
            { removeDoctype: true },
            { removeXMLProcInst: true },
            { removeComments: true },
            { removeMetadata: true },
            { removeXMLNS: true },
            { removeEditorsNSData: true },
            { cleanupAttrs: false },
            { removeAttrs: { attrs: '(data-name)' } },
            { addAttributesToSVGElement: false },
            { removeAttributesBySelector: false },
            { removeElementsByAttr: false },
            { inlineStyles: true },
            { minifyStyles: true },
            { convertStyleToAttrs: true },
            { cleanupIDs: true },
            { prefixIds: false },
            { removeRasterImages: false },
            { removeUselessDefs: true },
            { cleanupNumericValues: true },
            { cleanupListOfValues: true },
            { convertColors: true },
            { removeUnknownsAndDefaults: true },
            { removeNonInheritableGroupAttrs: true },
            { removeUselessStrokeAndFill: true },
            { removeViewBox: true },
            { cleanupEnableBackground: false },
            { removeHiddenElems: false },
            { removeEmptyText: true },
            { convertShapeToPath: true },
            { moveElemsAttrsToGroup: false },
            { moveGroupAttrsToElems: false },
            { collapseGroups: true },
            { convertPathData: true },
            { convertTransform: true },
            { removeEmptyAttrs: true },
            { removeEmptyContainers: true },
            { mergePaths: true },
            { removeUnusedNS: true },
            { sortAttrs: true },
            { removeTitle: true },
            { removeDesc: true },
            { removeDimensions: true },
            { addClassesToSVGElement: false },
            { removeStyleElement: true },
            { removeScriptElement: true },
            { removeOffCanvasPaths: false },
            { reusePaths: false }
        ]
    },
    webp: { quality: 80 }
}
