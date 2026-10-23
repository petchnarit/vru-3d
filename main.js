/**
 * VRU 3D Smart Campus - Pure Maps3D Project Implementation
 * Built strictly and exclusively from maps3d-project.json & OSM Vector Data
 *
 * Bounds: Width = 1480.9m, Depth = 408.0m (UTM Zone 47N centered at 100.61132E, 14.13384N)
 * Palette: Topographic (Ground #F5F0EF, Buildings #F1ECE1 with dark edges, Roads #B0B4C0, Water #98DCFF)
 */

// 1. Raw Project Configuration (maps3d-project.json)
const MAPS3D_CONFIG = {
  "format": "maps3d-project",
  "configVersion": 5,
  "savedAt": "2026-10-23T14:25:01.428Z",
  "trackOmitted": false,
  "params": {
    "areaSelected": {
      "ne": {
        "lat": 14.13569,
        "lng": 100.61818
      },
      "sw": {
        "lat": 14.132,
        "lng": 100.60446
      },
      "polygon": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              100.61818,
              14.13569
            ],
            [
              100.61818,
              14.132
            ],
            [
              100.60446,
              14.132
            ],
            [
              100.60446,
              14.13569
            ],
            [
              100.61818,
              14.13569
            ],
            [
              100.61818,
              14.13569
            ]
          ]
        ]
      },
      "rectCenter": [
        100.61132,
        14.13384
      ],
      "rectWidth": 1.4809,
      "rectHeight": 0.408,
      "rectRotation": 0,
      "shapeType": "rectangle"
    },
    "imagerySelected": "satlas-superes-2023",
    "groundMaterialMode": "color",
    "groundColor": "#F5F0EF",
    "terrainColorMode": "solid",
    "elevationLayers": [
      {
        "color": "#4ade80",
        "heightPercent": 40
      },
      {
        "color": "#9ca3af",
        "heightPercent": 75
      },
      {
        "color": "#ffffff",
        "heightPercent": 100
      }
    ],
    "buildings": {
      "show": true,
      "source": "auto",
      "detailed": false,
      "extrudedHeightExaggerationRatio": 1,
      "heightRandomnessPercent": 0,
      "color": "#F1ECE1",
      "minHeight": 9,
      "maxHeight": 12,
      "offset": 0,
      "hideSmallBuildings": false,
      "minWidthM": null,
      "minAreaM2": null,
      "edgeRendering": true,
      "edgeWidth": 30,
      "placement": "raised",
      "carveDepth": null
    },
    "roads": {
      "show": true,
      "color": "#B0B4C0",
      "widthScale": 1,
      "extrudedHeight": 3,
      "renderMode": "surface",
      "offset": 0.02,
      "placement": "raised",
      "carveDepth": null,
      "showFeature": null,
      "groups": {
        "arterial": {
          "enabled": true,
          "width": 10,
          "color": "#B0B4C0",
          "renderMode": "surface",
          "extrudedHeight": 3
        },
        "collector": {
          "enabled": true,
          "width": 6,
          "color": "#B0B4C0",
          "renderMode": "surface",
          "extrudedHeight": 3
        },
        "local": {
          "enabled": true,
          "width": 4,
          "color": "#B0B4C0",
          "renderMode": "surface",
          "extrudedHeight": 3
        },
        "service": {
          "enabled": true,
          "width": 2,
          "color": "#B0B4C0",
          "renderMode": "surface",
          "extrudedHeight": 3
        },
        "paths": {
          "enabled": true,
          "width": 1,
          "color": "#B0B4C0",
          "renderMode": "surface",
          "extrudedHeight": 3
        },
        "rail": {
          "enabled": false,
          "width": 3,
          "color": "#B0B4C0",
          "renderMode": "surface",
          "extrudedHeight": 3
        },
        "ferry": {
          "enabled": false,
          "width": 3,
          "color": "#B0B4C0",
          "renderMode": "surface",
          "extrudedHeight": 3
        },
        "tunnel": {
          "enabled": false,
          "width": 4,
          "color": "#B0B4C0",
          "renderMode": "surface",
          "extrudedHeight": 3
        },
        "bridge": {
          "enabled": true,
          "width": 6,
          "color": "#B0B4C0",
          "renderMode": "surface",
          "extrudedHeight": 3
        },
        "sidewalk": {
          "enabled": false,
          "width": 1,
          "color": "#B0B4C0",
          "renderMode": "surface",
          "extrudedHeight": 3
        },
        "crosswalk": {
          "enabled": false,
          "width": 1,
          "color": "#B0B4C0",
          "renderMode": "surface",
          "extrudedHeight": 3
        },
        "parking": {
          "enabled": false,
          "width": 2,
          "color": "#B0B4C0",
          "renderMode": "surface",
          "extrudedHeight": 3
        }
      }
    },
    "water": {
      "show": true,
      "color": "#98DCFF",
      "extrudedHeight": 1,
      "opacity": 0.7,
      "renderMode": "surface",
      "offset": 0.02,
      "placement": "raised",
      "carveDepth": null,
      "showFeature": null,
      "flatten": "off",
      "hideSmallBodies": true,
      "minWidthM": null,
      "minAreaM2": null,
      "groups": {
        "ocean": {
          "enabled": true,
          "width": null,
          "color": null,
          "renderMode": null,
          "extrudedHeight": null,
          "placement": null,
          "carveDepth": null
        },
        "lakes": {
          "enabled": true,
          "width": null,
          "color": null,
          "renderMode": null,
          "extrudedHeight": null,
          "placement": null,
          "carveDepth": null
        },
        "rivers": {
          "enabled": true,
          "width": null,
          "color": null,
          "renderMode": null,
          "extrudedHeight": null,
          "placement": null,
          "carveDepth": null
        },
        "streams": {
          "enabled": true,
          "width": null,
          "color": null,
          "renderMode": null,
          "extrudedHeight": null,
          "placement": null,
          "carveDepth": null
        },
        "canals": {
          "enabled": true,
          "width": null,
          "color": null,
          "renderMode": null,
          "extrudedHeight": null,
          "placement": null,
          "carveDepth": null
        },
        "ditches": {
          "enabled": true,
          "width": null,
          "color": null,
          "renderMode": null,
          "extrudedHeight": null,
          "placement": null,
          "carveDepth": null
        },
        "reservoirs": {
          "enabled": true,
          "width": null,
          "color": null,
          "renderMode": null,
          "extrudedHeight": null,
          "placement": null,
          "carveDepth": null
        },
        "ponds": {
          "enabled": true,
          "width": null,
          "color": null,
          "renderMode": null,
          "extrudedHeight": null,
          "placement": null,
          "carveDepth": null
        },
        "pools": {
          "enabled": true,
          "width": null,
          "color": null,
          "renderMode": null,
          "extrudedHeight": null,
          "placement": null,
          "carveDepth": null
        },
        "other": {
          "enabled": true,
          "width": null,
          "color": null,
          "renderMode": null,
          "extrudedHeight": null,
          "placement": null,
          "carveDepth": null
        }
      }
    },
    "landCover": {
      "show": true,
      "extrudedHeight": 1,
      "opacity": 1,
      "renderMode": "surface",
      "offset": 0.02,
      "minUrbanAreaM2": null,
      "categories": {
        "WOOD": {
          "height": null,
          "enabled": true,
          "color": null,
          "renderMode": null,
          "placement": "raised",
          "carveDepth": null,
          "showFeature": null
        },
        "GRASS": {
          "height": null,
          "enabled": true,
          "color": null,
          "renderMode": null,
          "placement": "raised",
          "carveDepth": null,
          "showFeature": null
        },
        "FARMLAND": {
          "height": null,
          "enabled": true,
          "color": null,
          "renderMode": null,
          "placement": "raised",
          "carveDepth": null,
          "showFeature": null
        },
        "WETLAND": {
          "height": null,
          "enabled": true,
          "color": null,
          "renderMode": null,
          "placement": "raised",
          "carveDepth": null,
          "showFeature": null
        },
        "SAND": {
          "height": null,
          "enabled": true,
          "color": null,
          "renderMode": null,
          "placement": "raised",
          "carveDepth": null,
          "showFeature": null
        },
        "ICE": {
          "height": null,
          "enabled": true,
          "color": null,
          "renderMode": null,
          "placement": "raised",
          "carveDepth": null,
          "showFeature": null
        },
        "ROCK": {
          "height": null,
          "enabled": true,
          "color": null,
          "renderMode": null,
          "placement": "raised",
          "carveDepth": null,
          "showFeature": null
        },
        "URBAN": {
          "height": null,
          "enabled": true,
          "color": null,
          "renderMode": null,
          "placement": "raised",
          "carveDepth": null,
          "showFeature": null
        }
      }
    },
    "parcels": {
      "show": false,
      "color": "#646464"
    },
    "contour": {
      "show": false,
      "interval": null,
      "color": "#8b6f47",
      "renderMode": "line",
      "width": null,
      "extrudedHeight": null,
      "labels": false,
      "placement": "raised",
      "carveDepth": null,
      "offset": 0.1
    },
    "trees": {
      "show": true,
      "color": "#4a7c3a",
      "scale": 0.9,
      "style": "classic",
      "sources": {
        "chm": true,
        "osm": true,
        "fill": false
      },
      "density": 0.005,
      "clearanceM": 4
    },
    "sideTexture": "dirt",
    "sideColor": "#F5F0EF",
    "sideMaterial": "color",
    "printing": {
      "base": 20,
      "baseMm": 2,
      "largestSideScaling": {
        "enabled": false,
        "targetSize": 250
      },
      "straightenNorth": null,
      "zMode": "exaggeration",
      "targetModelHeightMm": 17,
      "plateSize": 220,
      "splitting": {
        "mode": "none",
        "autoFit": true,
        "columns": 2,
        "rows": 2
      }
    },
    "printFrame": {
      "baseElevation": null,
      "frameCenter": null,
      "fixedScale": null
    },
    "exportCrs": "UTM",
    "exportUnit": "m",
    "exportAbsoluteCoordinates": false,
    "elevationDataset": "mapterhorn-global",
    "elevationVerticalResolution": null,
    "elevationExaggeration": 1,
    "wireframe": false,
    "gridOverlay": {
      "visible": false
    },
    "sun": {
      "shadows": false,
      "azimuthDeg": 134,
      "elevationDeg": 46,
      "timeHours": null,
      "date": null
    },
    "renderingPreset": "topographic",
    "palette": "topographic",
    "elevationZoom": 11,
    "textureZoom": 15,
    "markers": [],
    "markers3d": {
      "show": true,
      "items": []
    },
    "tracks": [],
    "tracksShow": true,
    "frame": {
      "enabled": false,
      "style": "rounded",
      "color": "#C8A96A",
      "thickness": 3,
      "fuseToModel": true,
      "height": 5,
      "title": "",
      "subtitle": "",
      "font": "montserrat",
      "customFontName": "",
      "textColor": "#222222",
      "textEdge": "bottom",
      "textSize": 6,
      "textHeight": 0.8,
      "textPlacement": "raised"
    }
  }
};

// 2. Real Vector Data (OpenStreetMap roads and water strictly within 1.48km x 408m box)
const MAPS3D_VECTORS = {"bounds": {"width": 1480.9, "depth": 408.0, "center": [100.61132, 14.13384]}, "roads": [{"id": "217802050", "name": "", "group": "local", "width": 4.0, "pts": [[694.85, -57.72], [642.83, -57.35], [561.47, -56.65], [553.36, -56.49], [424.66, -56.45], [417.27, -56.51], [406.95, -56.57], [386.73, -56.54], [339.4, -56.62], [116.68, -55.57]]}, {"id": "217802052", "name": "", "group": "service", "width": 2.0, "pts": [[-101.08, 99.19], [-127.06, 108.76], [-125.44, 174.53], [-413.33, 177.2], [-595.5, 176.99], [-614.73, 178.07], [-614.15, 170.82], [-614.09, 165.54], [-613.2, 134.31], [-612.14, 106.12], [-610.23, 71.68], [-701.75, 70.25]]}, {"id": "217802054", "name": "", "group": "local", "width": 4.0, "pts": [[-15.45, -85.62], [-15.16, -39.31], [-15.05, -22.09], [-14.92, -1.38], [-14.39, 83.16]]}, {"id": "217802055", "name": "", "group": "service", "width": 2.0, "pts": [[-127.06, 108.76], [-165.56, 107.33], [-350.41, 97.63], [-407.97, 94.6]]}, {"id": "217802057", "name": "", "group": "local", "width": 4.0, "pts": [[740.37, -217.46], [493.0, -210.68], [426.85, -209.88], [292.63, -208.26], [172.93, -206.8], [27.26, -205.04], [-26.43, -204.41], [-237.38, -203.3], [-415.64, -204.77]]}, {"id": "217802058", "name": "", "group": "local", "width": 4.0, "pts": [[407.99, 144.03], [408.2, 83.88], [407.66, 34.97], [407.22, -4.58], [406.95, -56.57]]}, {"id": "217802059", "name": "", "group": "service", "width": 2.0, "pts": [[-612.14, 106.12], [-664.53, 105.03], [-684.0, 104.31], [-702.4, 103.64]]}, {"id": "217802060", "name": "", "group": "service", "width": 2.0, "pts": [[-400.38, -65.29], [-403.31, -10.36], [-407.97, 94.6], [-413.33, 177.2]]}, {"id": "217802066", "name": "", "group": "service", "width": 2.0, "pts": [[-613.2, 134.31], [-647.09, 132.89], [-665.62, 132.6], [-672.56, 132.97], [-675.53, 134.05], [-676.74, 136.09], [-676.48, 177.69]]}, {"id": "217802068", "name": "", "group": "local", "width": 4.0, "pts": [[742.73, 27.21], [730.21, 28.28], [695.26, 31.26], [695.26, 42.48], [695.26, 57.46], [730.29, 54.48], [742.82, 53.41]]}, {"id": "217802073", "name": "", "group": "local", "width": 4.0, "pts": [[695.26, 57.46], [693.53, 143.75], [611.28, 143.83], [565.82, 143.87], [526.01, 143.91], [433.64, 144.0], [424.81, 144.01], [407.99, 144.03], [296.83, 144.03], [267.15, 144.03], [211.7, 144.03], [115.53, 144.03], [115.07, 130.39], [113.55, 84.0], [116.68, -55.57]]}, {"id": "218121112", "name": "", "group": "local", "width": 4.0, "pts": [[-617.7, -287.16], [-615.29, -231.41], [-616.33, -212.23], [-617.05, -206.89], [-617.26, -198.42], [-624.5, -198.13], [-685.82, -195.96]]}, {"id": "622540412", "name": "", "group": "service", "width": 2.0, "pts": [[93.86, 83.87], [93.42, 137.46], [93.5, 144.4], [97.26, 144.33], [100.65, 144.27], [103.92, 144.26], [115.53, 144.03]]}, {"id": "622540413", "name": "", "group": "service", "width": 2.0, "pts": [[72.87, 83.73], [75.77, 124.72], [76.48, 134.56], [77.36, 141.87], [78.59, 143.83], [81.19, 144.84], [84.96, 144.98], [93.5, 144.4]]}, {"id": "622540415", "name": "", "group": "service", "width": 2.0, "pts": [[-81.68, 89.82], [-54.24, 111.61], [-4.51, 151.72], [36.45, 188.63], [40.3, 191.53], [44.5, 193.77], [49.85, 193.55], [60.99, 192.91]]}, {"id": "622540416", "name": "", "group": "local", "width": 4.0, "pts": [[-101.08, 99.19], [-35.14, 158.95]]}, {"id": "622540418", "name": "", "group": "local", "width": 4.0, "pts": [[-81.68, 89.82], [-101.08, 99.19]]}, {"id": "622540419", "name": "", "group": "local", "width": 4.0, "pts": [[113.55, 84.0], [93.86, 83.87], [72.87, 83.73], [-14.39, 83.16], [-64.31, 82.54], [-72.78, 86.09], [-81.68, 89.82]]}, {"id": "622540420", "name": "", "group": "service", "width": 2.0, "pts": [[-249.03, -8.56], [-170.37, 100.67], [-165.56, 107.33]]}, {"id": "622540421", "name": "", "group": "service", "width": 2.0, "pts": [[-608.9, 38.02], [-702.04, 35.97]]}, {"id": "622540422", "name": "", "group": "service", "width": 2.0, "pts": [[-676.48, 177.69], [-702.53, 177.63]]}, {"id": "622540423", "name": "", "group": "service", "width": 2.0, "pts": [[-614.73, 178.07], [-624.43, 178.21], [-676.48, 177.69]]}, {"id": "622540424", "name": "", "group": "service", "width": 2.0, "pts": [[-698.67, -66.27], [-701.66, -64.93], [-702.31, -63.42], [-702.31, 3.18], [-702.04, 35.97], [-701.75, 70.25], [-702.4, 103.64], [-702.53, 177.63], [-702.46, 185.88]]}, {"id": "622540425", "name": "", "group": "service", "width": 2.0, "pts": [[-604.95, -65.96], [-608.9, 38.02], [-609.01, 40.97], [-610.23, 71.68]]}, {"id": "622540426", "name": "", "group": "local", "width": 4.0, "pts": [[-408.63, -183.76], [-402.65, -179.7], [-391.86, -172.62], [-373.68, -160.27], [-348.06, -141.38], [-318.24, -121.76], [-284.29, -95.91], [-273.86, -82.81], [-266.82, -71.24]]}, {"id": "622540432", "name": "", "group": "service", "width": 2.0, "pts": [[27.26, -205.04], [26.39, -259.08], [25.45, -261.54], [23.79, -263.42], [-17.33, -264.57], [-23.7, -261.39], [-25.86, -256.9], [-26.16, -251.84], [-26.43, -204.41]]}, {"id": "622540433", "name": "", "group": "local", "width": 4.0, "pts": [[-242.29, -80.74], [-257.32, -74.92]]}, {"id": "622540434", "name": "", "group": "service", "width": 2.0, "pts": [[-266.82, -71.24], [-279.3, -69.75], [-285.44, -68.75], [-400.38, -65.29], [-517.37, -65.68], [-604.95, -65.96], [-698.67, -66.27]]}, {"id": "622552193", "name": "", "group": "service", "width": 2.0, "pts": [[267.15, 144.03], [265.85, 170.46], [262.52, 174.95], [257.88, 179.0], [257.74, 194.5], [259.77, 196.81], [353.0, 193.49]]}, {"id": "622552195", "name": "", "group": "service", "width": 2.0, "pts": [[100.65, 144.27], [97.62, 195.51], [99.51, 198.26], [130.34, 197.97]]}, {"id": "622552197", "name": "", "group": "service", "width": 2.0, "pts": [[408.45, 174.95], [407.99, 144.03]]}, {"id": "622552199", "name": "", "group": "service", "width": 2.0, "pts": [[424.81, 144.01], [424.37, 176.69], [427.27, 179.44]]}, {"id": "622552203", "name": "", "group": "service", "width": 2.0, "pts": [[742.97, 165.39], [711.16, 168.44], [707.84, 176.11], [667.6, 176.11]]}, {"id": "622552205", "name": "", "group": "service", "width": 2.0, "pts": [[611.15, 162.36], [529.77, 162.5], [527.3, 160.91], [526.44, 153.96], [526.01, 143.91]]}, {"id": "622552206", "name": "", "group": "service", "width": 2.0, "pts": [[611.28, 143.83], [611.15, 162.36], [610.99, 185.82]]}, {"id": "622552208", "name": "", "group": "service", "width": 2.0, "pts": [[705.23, -57.83], [704.09, -75.36], [703.5, -103.88]]}, {"id": "622552209", "name": "", "group": "local", "width": 4.0, "pts": [[694.85, -57.72], [705.23, -57.83], [731.77, -59.24], [741.22, -59.75]]}, {"id": "622552210", "name": "", "group": "service", "width": 2.0, "pts": [[628.79, -102.97], [627.92, -73.77]]}, {"id": "622552211", "name": "", "group": "service", "width": 2.0, "pts": [[552.93, -73.32], [507.47, -74.06]]}, {"id": "622552212", "name": "", "group": "service", "width": 2.0, "pts": [[553.36, -56.49], [552.93, -73.32], [552.79, -82.31], [552.5, -90.41], [550.9, -91.72], [508.06, -92.01]]}, {"id": "622552213", "name": "", "group": "local", "width": 4.0, "pts": [[386.88, -103.06], [386.73, -56.54]]}, {"id": "622552214", "name": "", "group": "local", "width": 4.0, "pts": [[-125.44, 174.53], [-44.97, 173.94], [-38.46, 172.2], [-34.99, 170.03], [-33.4, 166.85], [-33.32, 162.86], [-35.14, 158.95]]}, {"id": "622552215", "name": "", "group": "paths", "width": 1.0, "pts": [[695.26, 42.48], [670.06, 43.06]]}, {"id": "622552216", "name": "", "group": "service", "width": 2.0, "pts": [[563.24, 45.52], [520.21, 46.25]]}, {"id": "622552217", "name": "", "group": "service", "width": 2.0, "pts": [[565.82, 143.87], [563.24, 45.52], [561.47, -56.65]]}, {"id": "622552218", "name": "", "group": "service", "width": 2.0, "pts": [[471.15, -32.44], [472.58, -2.83]]}, {"id": "622552219", "name": "", "group": "service", "width": 2.0, "pts": [[454.2, -32.07], [454.92, 21.01]]}, {"id": "622552220", "name": "", "group": "service", "width": 2.0, "pts": [[437.83, -31.72], [438.13, 19.18], [440.3, 21.21], [454.92, 21.01], [462.31, 20.92]]}, {"id": "622552221", "name": "", "group": "service", "width": 2.0, "pts": [[424.66, -56.45], [424.81, -36.99], [434.22, -31.64], [437.83, -31.72], [454.2, -32.07], [471.15, -32.44], [487.35, -32.79]]}, {"id": "622552222", "name": "", "group": "service", "width": 2.0, "pts": [[457.68, 79.84], [457.23, 121.09]]}, {"id": "622552223", "name": "", "group": "service", "width": 2.0, "pts": [[433.64, 144.0], [439.86, 121.67], [439.57, 80.56]]}, {"id": "622552224", "name": "", "group": "service", "width": 2.0, "pts": [[439.86, 121.67], [457.23, 121.09]]}, {"id": "622552225", "name": "", "group": "service", "width": 2.0, "pts": [[439.57, 80.56], [441.46, 77.81], [456.37, 77.38], [457.68, 79.84]]}, {"id": "622552226", "name": "", "group": "service", "width": 2.0, "pts": [[407.66, 34.97], [344.89, 34.38]]}, {"id": "622552227", "name": "", "group": "service", "width": 2.0, "pts": [[257.78, 47.43], [274.25, 40.31], [279.31, 38.86], [295.68, 14.68], [307.26, 5.57]]}, {"id": "622552228", "name": "", "group": "service", "width": 2.0, "pts": [[236.31, 63.47], [258.48, 63.47]]}, {"id": "622552229", "name": "", "group": "service", "width": 2.0, "pts": [[211.7, 144.03], [211.61, 127.86]]}, {"id": "622552230", "name": "", "group": "service", "width": 2.0, "pts": [[339.1, -11.22], [307.26, 5.57], [291.04, 6.0], [273.96, 5.42], [263.39, 8.75], [259.05, 13.81], [257.16, 32.78], [257.78, 47.43], [258.48, 63.47], [259.34, 83.6]]}, {"id": "622552231", "name": "", "group": "service", "width": 2.0, "pts": [[407.22, -4.58], [345.33, -5.72], [342.15, -7.31], [339.1, -11.22], [339.4, -56.62]]}, {"id": "622552232", "name": "", "group": "service", "width": 2.0, "pts": [[408.2, 83.88], [352.27, 82.59]]}, {"id": "622552233", "name": "", "group": "service", "width": 2.0, "pts": [[362.56, 132.39], [364.15, 94.02]]}, {"id": "622552234", "name": "", "group": "service", "width": 2.0, "pts": [[296.69, 131.96], [360.82, 130.08], [362.56, 132.39], [363.13, 136.88]]}, {"id": "622552235", "name": "", "group": "service", "width": 2.0, "pts": [[115.07, 130.39], [207.07, 130.08], [211.61, 127.86], [217.79, 124.86], [222.27, 122.54], [292.77, 122.25], [295.23, 124.13], [296.69, 131.96], [296.83, 144.03]]}, {"id": "622552236", "name": "", "group": "paths", "width": 1.0, "pts": [[0.3, -16.48], [1.06, -26.35], [0.63, -31.72], [-1.91, -40.75], [-5.6, -49.37], [-7.41, -55.24], [-7.99, -61.25], [-6.33, -67.62], [-4.66, -70.8], [-2.34, -73.11], [1.13, -74.85], [4.46, -75.8], [7.72, -75.8], [11.63, -74.78], [16.92, -72.1], [20.61, -67.83], [21.47, -61.75], [21.04, -53.71], [19.23, -41.91], [15.47, -22.88], [13.31, -9.43]]}, {"id": "622552237", "name": "", "group": "paths", "width": 1.0, "pts": [[-15.05, -22.09], [-6.03, -19.92], [0.3, -16.48], [13.31, -9.43], [16.41, -7.75], [24.66, -3.55], [28.42, -1.81]]}, {"id": "622552238", "name": "", "group": "service", "width": 2.0, "pts": [[-97.67, -85.87], [-98.11, -45.98], [-99.84, -41.48], [-106.65, -39.89], [-121.56, -40.9], [-123.01, -43.66], [-124.16, -85.95]]}, {"id": "622552239", "name": "", "group": "local", "width": 4.0, "pts": [[-14.92, -1.38], [-66.4, -1.24]]}, {"id": "622552240", "name": "", "group": "local", "width": 4.0, "pts": [[-15.16, -39.31], [-73.21, -39.6]]}, {"id": "622552241", "name": "", "group": "service", "width": 2.0, "pts": [[-517.37, -65.68], [-521.42, 123.13]]}, {"id": "622552242", "name": "", "group": "local", "width": 4.0, "pts": [[106.89, -83.61], [110.37, -91.86], [113.69, -95.33], [117.31, -97.22], [203.75, -98.08], [317.39, -103.29], [386.88, -103.06], [442.77, -102.86], [602.01, -102.58], [628.79, -102.97], [701.61, -104.03], [703.5, -103.88], [741.55, -108.23]]}, {"id": "622552243", "name": "", "group": "local", "width": 4.0, "pts": [[417.71, -198.13], [265.56, -195.96], [136.14, -196.82], [100.95, -196.97], [-43.97, -195.96], [-196.57, -194.58], [-237.17, -194.22]]}, {"id": "622552244", "name": "", "group": "paths", "width": 1.0, "pts": [[558.15, -126.75], [539.32, -126.9], [480.83, -128.34], [434.08, -125.74]]}, {"id": "622552245", "name": "", "group": "local", "width": 4.0, "pts": [[740.37, -158.33], [731.63, -158.32], [722.9, -158.31], [714.93, -153.9], [712.04, -145.14], [707.7, -139.21], [695.39, -137.76], [687.13, -135.88], [677.43, -132.55], [671.8, -131.1], [668.61, -129.8], [558.15, -126.75]]}, {"id": "622564460", "name": "", "group": "service", "width": 2.0, "pts": [[642.83, -57.35], [643.56, -72.32], [647.32, -74.35], [704.09, -75.36]]}, {"id": "622575380", "name": "", "group": "paths", "width": 1.0, "pts": [[742.57, -9.01], [736.19, -10.93], [736.76, -25.73]]}, {"id": "623038390", "name": "", "group": "bridge", "width": 6.0, "pts": [[-603.11, -171.78], [-601.41, -168.95], [-597.14, -161.2]]}, {"id": "623038391", "name": "", "group": "paths", "width": 1.0, "pts": [[-617.26, -198.42], [-610.75, -187.05], [-603.11, -171.78]]}, {"id": "694361219", "name": "", "group": "local", "width": 4.0, "pts": [[116.68, -55.57], [112.75, -74.71], [106.89, -83.61], [99.78, -87.6], [-15.45, -85.62], [-97.67, -85.87], [-124.16, -85.95], [-228.01, -86.27], [-238.54, -82.6], [-242.29, -80.74]]}, {"id": "694361220", "name": "", "group": "local", "width": 4.0, "pts": [[695.26, 31.26], [694.85, -57.72]]}, {"id": "865247122", "name": "", "group": "local", "width": 4.0, "pts": [[-196.57, -194.58], [-194.93, -133.86], [-194.53, -118.93], [-194.82, -115.46], [-197.42, -113.29], [-242.74, -113.0], [-250.12, -112.71], [-253.81, -111.77], [-256.2, -109.82], [-258.8, -106.41], [-238.54, -82.6]]}, {"id": "865247123", "name": "", "group": "local", "width": 4.0, "pts": [[278.59, -137.47], [279.74, -126.46], [281.2, -124.58], [285.54, -121.97], [332.44, -123.28], [389.48, -123.42], [394.55, -125.01], [400.48, -130.67], [408.02, -151.22], [415.54, -187.71], [417.71, -198.13]]}, {"id": "865247124", "name": "", "group": "local", "width": 4.0, "pts": [[99.78, -87.6], [100.66, -151.22], [100.95, -196.97]]}, {"id": "865248005", "name": "", "group": "local", "width": 4.0, "pts": [[100.66, -151.22], [192.45, -151.22]]}, {"id": "898311787", "name": "", "group": "local", "width": 4.0, "pts": [[-257.32, -74.92], [-258.79, -74.35], [-266.82, -71.24]]}, {"id": "898311788", "name": "", "group": "service", "width": 2.0, "pts": [[-290.9, -128.55], [-276.18, -129.94], [-261.84, -130.67], [-216.54, -132.69], [-194.93, -133.86]]}, {"id": "898311789", "name": "", "group": "local", "width": 4.0, "pts": [[-384.32, -194.0], [-362.31, -177.42], [-339.45, -160.2], [-290.9, -128.55], [-266.63, -112.13], [-258.8, -106.41]]}, {"id": "898311790", "name": "", "group": "local", "width": 4.0, "pts": [[-417.91, -192.05], [-394.03, -193.93], [-384.32, -194.0], [-373.76, -194.08], [-336.84, -194.65], [-237.17, -194.22]]}, {"id": "898311791", "name": "", "group": "local", "width": 4.0, "pts": [[-417.91, -192.05], [-429.06, -192.34], [-442.23, -193.35], [-475.82, -193.21], [-504.77, -193.21], [-520.56, -192.92], [-531.27, -192.19], [-546.25, -185.67], [-570.57, -169.32], [-594.54, -154.41], [-598.44, -148.76], [-603.51, -142.68], [-610.6, -138.05], [-653.16, -123.28]]}, {"id": "912841342", "name": "", "group": "local", "width": 4.0, "pts": [[714.93, -153.9], [710.59, -165.77], [703.86, -179.37], [693.8, -197.26], [574.5, -196.03], [510.81, -195.38], [417.71, -198.13]]}, {"id": "930540606", "name": "", "group": "service", "width": 2.0, "pts": [[-72.78, 86.09], [-75.67, 67.09], [-78.13, 42.48]]}, {"id": "930600845", "name": "", "group": "service", "width": 2.0, "pts": [[417.27, -56.51], [417.36, -89.91], [417.42, -94.18], [417.86, -97.0], [418.73, -98.81], [419.67, -99.75], [421.84, -100.41]]}, {"id": "930602380", "name": "", "group": "local", "width": 4.0, "pts": [[574.5, -196.03], [569.01, -184.08], [566.39, -173.95], [562.92, -165.56], [557.71, -158.32], [554.81, -152.52], [553.36, -143.84], [553.95, -137.76], [558.15, -126.75]]}, {"id": "948038381", "name": "ถนนพหลโยธิน", "group": "arterial", "width": 10.0, "pts": [[743.34, 508.5], [743.31, 439.31], [743.33, 431.21], [743.43, 389.14], [743.52, 379.39], [743.77, 350.38], [743.42, 316.43], [743.48, 307.31], [742.97, 165.39], [742.83, 58.57], [742.82, 53.41], [742.73, 27.21], [742.66, 6.04], [742.63, -2.87], [742.57, -9.01], [741.22, -59.75], [741.55, -108.23], [740.37, -158.33], [740.37, -217.46], [739.67, -246.9], [738.67, -287.05], [738.61, -305.58], [738.37, -327.82], [737.66, -356.29], [735.66, -398.37], [734.18, -505.15], [731.97, -580.02], [732.05, -588.59], [731.92, -661.54], [732.2, -675.28], [733.54, -742.01], [733.49, -762.88], [733.86, -805.14], [733.7, -819.08], [733.28, -837.81], [733.23, -887.13], [732.78, -898.03], [732.13, -960.22], [731.72, -1030.54], [731.41, -1083.97], [731.22, -1113.93], [730.79, -1187.62], [730.56, -1197.17]]}, {"id": "950398274", "name": "", "group": "paths", "width": 1.0, "pts": [[13.31, -9.43], [15.69, -2.39], [22.41, 15.48], [23.5, 19.83], [22.85, 25.84], [21.55, 27.64], [19.23, 31.05], [16.04, 33.44], [13.15, 35.1], [8.37, 35.82], [4.24, 35.1], [0.63, 34.16], [-1.98, 31.85], [-5.16, 29.17], [-6.68, 25.69], [-6.9, 21.79], [-6.39, 15.12], [-4.59, 9.04], [-2.05, -4.64], [-0.74, -13.18], [0.3, -16.48]]}, {"id": "1049832023", "name": "", "group": "service", "width": 2.0, "pts": [[-241.0, -43.66], [-258.79, -74.35]]}, {"id": "1198891198", "name": "", "group": "service", "width": 2.0, "pts": [[-350.41, 97.63], [-348.39, 2.4]]}, {"id": "1560094118", "name": "", "group": "paths", "width": 1.0, "pts": [[-597.14, -161.2], [-594.54, -154.41]]}], "water": [{"id": "174967791", "name": "คลองเชียงรากน้อย", "pts": [[-690.89, -139.98], [-746.92, -161.11], [-827.19, -166.98], [-870.35, -167.56], [-929.61, -152.02], [-942.85, -147.99], [-979.67, -141.67], [-1030.88, -124.98], [-1049.87, -101.38], [-1090.15, -48.45], [-1117.77, -35.79], [-1158.05, -20.83], [-1209.83, 9.09], [-1461.29, 158.13], [-1495.81, 169.63], [-1534.93, 172.51], [-1784.66, 175.96], [-1814.0, 175.38], [-1864.06, 168.48], [-1893.41, 161.58], [-1934.84, 166.18], [-1983.17, 183.44], [-2052.8, 202.44], [-2146.02, 243.29], [-2168.46, 253.64], [-2242.69, 268.6], [-2360.64, 302.56], [-2426.23, 335.35], [-2452.7, 351.46], [-2497.0, 402.68], [-2521.17, 433.75], [-2538.44, 456.19], [-2562.03, 475.18], [-2612.66, 495.32], [-2688.62, 523.52], [-2773.21, 532.14], [-2799.68, 532.72], [-2851.46, 537.9], [-2917.63, 552.86], [-2986.68, 537.32], [-3019.47, 534.45], [-3059.18, 540.2], [-3105.22, 570.69], [-3142.23, 576.47]]}, {"id": "789326159", "name": "คลองเชียงรากน้อย", "pts": [[-546.83, -204.91], [-582.03, -176.81], [-632.41, -151.91], [-666.49, -140.12], [-690.89, -139.98]]}, {"id": "789326165", "name": "คลองเชียงรากน้อย", "pts": [[902.44, -1237.79], [889.29, -1233.68], [860.25, -1225.43], [806.14, -1222.17], [801.26, -1218.51], [723.14, -1206.72], [692.62, -1198.17], [675.13, -1190.44], [644.61, -1173.76], [396.43, -970.74], [384.63, -960.57], [-514.62, -230.27], [-546.83, -204.91]]}, {"id": "789326169", "name": "Canal", "pts": [[28.27, 198.31], [-92.9, 91.27], [-137.49, 21.5], [-233.03, -57.26], [-274.73, -108.23], [-398.08, -188.72]]}]};

// 3. VRU Campus Building Directory (1:1 scaled to Maps3D box)
const HOSPITAL_BUILDINGS = [
  {
    id: 'bld-1', num: '1', name: '1. หอประชุม 80 ปี วไลยอลงกรณ์', shortName: '1', sub: 'หอประชุมใหญ่เฉลิมพระเกียรติ 80 พรรษา อาคารแลนด์มาร์คขนาดใหญ่ด้านหน้ามหาวิทยาลัย', category: 'อาคารหอประชุมและแลนด์มาร์ค', status: 'เปิดทำการปกติ', archType: 'auditorium80', pos: { x: 546.93, y: 0.00, z: 50.39 }, rotY: 0, anchorHeight: 15, dimensions: { w: 30.12, h: 11.0, d: 32.89 }, roofColor: 0xf8fafc, accentColor: 0x047857,
    floors: [{ num: 3, desc: 'โถงหอประชุมใหญ่ 3,500 ที่นั่ง' }, { num: 2, desc: 'โถงต้อนรับและห้องประชุมย่อย' }, { num: 1, desc: 'ลานนิทรรศการและลานจอดรถ' }]
  },
      {
    id: 'bld-2', num: '2', name: '2. อาคาร 100 ปี สมเด็จพระศรีนครินทร์ (SPB)', shortName: '2',
    sub: 'สำนักงานอธิการบดี, ห้องประชุมสภามหาวิทยาลัย, สำนักส่งเสริมวิชาการและงานทะเบียน',
    category: 'อาคารบริหารและสำนักงานกลาง', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'spb100', pos: { x: 436.66, y: 0.00, z: 48.99 }, rotY: 0, anchorHeight: 18,
    dimensions: { w: 22.5, h: 16.0, d: 14.0 }, roofColor: 0x94a3b8, accentColor: 0x047857,
    floors: [
      { num: 6, desc: 'สำนักงานอธิการบดี' },
      { num: 5, desc: 'กองนโยบายและแผน' },
      { num: 4, desc: 'ศูนย์เทคโนโลยีดิจิทัล' },
      { num: 3, desc: 'กองกลาง' },
      { num: 2, desc: 'กองคลัง' },
      { num: 1, desc: 'One Stop Service' }
    ]
  },
  {
    id: 'bld-3', num: '3', name: '3. โรงแรม มรภ.วไลยอลงกรณ์', shortName: '3',
    sub: 'ศูนย์ฝึกประสบการณ์วิชาชีพ โรงแรม มรภ.วไลยอลงกรณ์ฯ มาตรฐาน 78 ห้องพัก',
    category: 'ศูนย์ฝึกวิชาชีพและบริการที่พัก', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'hotel', pos: { x: 645.18, y: 0.00, z: -75.48 }, rotY: 0, anchorHeight: 16,
    dimensions: { w: 24.0, h: 12.0, d: 14.0 }, roofColor: 0x334155, accentColor: 0x059669,
    floors: [{ num: 4, desc: 'ห้องพักรับรองพิเศษ' }, { num: 3, desc: 'ห้องพักสัมมนา' }, { num: 2, desc: 'ห้องจัดเลี้ยง' }, { num: 1, desc: 'ล็อบบี้ต้อนรับ' }]
  },
  {
    id: 'bld-4', num: '4', name: '4. VRU Green Community Mall', shortName: '4',
    sub: 'ศูนย์รวมร้านค้า ร้านอาหาร สหกรณ์ และพื้นที่บริการชุมชนริมถนนพหลโยธิน',
    category: 'อาคารบริการและสวัสดิการ', status: 'เปิดบริการ 07:00 - 20:00 น.',
    archType: 'mall', pos: { x: 642.34, y: 0.00, z: -142.80 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 36.0, h: 6.0, d: 26.0 }, roofColor: 0x475569, accentColor: 0x10b981,
    floors: [{ num: 2, desc: 'Co-Working Space' }, { num: 1, desc: 'ศูนย์อาหารและร้านค้า' }]
  },
  {
    id: 'bld-5', num: '5', name: '5. อาคารศูนย์ส่งเสริมสุขภาพ / สระว่ายน้ำ', shortName: '5',
    sub: 'สระว่ายน้ำอวยพร เปล่งวานิช ขนาด 50 เมตร และศูนย์ฟิตเนสออกกำลังกาย',
    category: 'ศูนย์กีฬาและสุขภาพ', status: 'เปิดบริการ 06:00 - 20:00 น.',
    archType: 'pool', pos: { x: 558.80, y: 0.00, z: -75.48 }, rotY: 0, anchorHeight: 7,
    dimensions: { w: 16.0, h: 4.5, d: 14.0 }, roofColor: 0x0284c7, accentColor: 0x0284c7,
    floors: [{ num: 1, desc: 'สระว่ายน้ำ 50 เมตรและศูนย์ฟิตเนส' }]
  },
  {
    id: 'bld-8', num: '8', name: '8. พระอนุสาวรีย์เจ้าฟ้าวไลยอลงกรณ์ฯ', shortName: '8',
    sub: 'พระอนุสาวรีย์สมเด็จพระราชปิตุจฉา เจ้าฟ้าวไลยอลงกรณ์ กรมหลวงเพชรบุรีราชสิรินธร',
    category: 'อนุสาวรีย์และสิ่งศักดิ์สิทธิ์', status: 'เปิดสักการะตลอดวัน',
    archType: 'monument', pos: { x: 654.07, y: 0.00, z: 49.30 }, rotY: 0, anchorHeight: 8,
    dimensions: { w: 5.0, h: 5.0, d: 5.0 }, roofColor: 0xfbbf24, accentColor: 0xf59e0b,
    floors: [{ num: 1, desc: 'ลานพระอนุสาวรีย์' }]
  },
    {
    id: 'bld-10', num: '10', name: '10. อาคารเรียนรวมทิศใต้ (อาคาร 9 ชั้น พร้อมปีกตะวันตก 1:1 และลานจอดรถติดถนน)', shortName: '10',
    sub: 'อาคารเรียนรวม 9 ชั้น ปีกตะวันตกครอบคลุมครบ 1:1 พร้อมลานจอดรถแอสฟัลต์ติดถนนหลักทิศเหนือ',
    category: 'อาคารเรียนรวม', status: 'เปิดทำการ 08:00 - 18:00 น.',
    archType: 'bld10_9floors', pos: { x: 503.24, y: 0.00, z: 179.76 }, rotY: 0, anchorHeight: 31,
    dimensions: { w: 49.5, h: 28.0, d: 12.2 }, roofColor: 0xebedf0, accentColor: 0x047857,
    floors: [
      { num: 9, desc: 'ห้องปฏิบัติการและห้องวิจัย' },
      { num: 8, desc: 'ห้องเรียนรวมและห้องบรรยาย' },
      { num: 7, desc: 'ห้องเรียนและห้องสัมมนา' },
      { num: 6, desc: 'ห้องปฏิบัติการคอมพิวเตอร์' },
      { num: 5, desc: 'ห้องเรียนรวม' },
      { num: 4, desc: 'ห้องเรียนรวม' },
      { num: 3, desc: 'ห้องเรียนรวม' },
      { num: 2, desc: 'ห้องเรียนรวมและห้องพักอาจารย์' },
      { num: 1, desc: 'โถงทางเข้ากลางและลานกิจกรรม' }
    ]
  },
  {
    id: 'bld-11', num: '11', name: '11. ยิมเนเซียม 1 (โรงยิม 1)', shortName: '11',
    sub: 'อาคารพลศึกษา สนามบาสเกตบอล วอลเลย์บอล และแบดมินตันในร่ม',
    category: 'สนามกีฬาและนันทนาการ', status: 'เปิดบริการ 08:00 - 21:00 น.',
    archType: 'box', pos: { x: 349.79, y: 0.00, z: 36.38 }, rotY: 0, anchorHeight: 11,
    dimensions: { w: 13.2, h: 8.0, d: 13.2 }, roofColor: 0x334155, accentColor: 0x38bdf8,
    floors: [{ num: 2, desc: 'อัฒจันทร์ในร่ม' }, { num: 1, desc: 'สนามแข่งขันในร่ม' }]
  },
  {
    id: 'bld-12', num: '12', name: '12. อาคาร 75 ปี วไลยอลงกรณ์ (ศูนย์ภาษา)', shortName: '12',
    sub: 'สถาบันภาษา ศูนย์การเรียนรู้ภาษาต่างประเทศและห้องปฏิบัติการคอมพิวเตอร์',
    category: 'อาคารเรียนและภาษา', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 241.72, y: 0.00, z: 54.40 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 20.0, h: 10.0, d: 12.0 }, roofColor: 0x334155, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ศูนย์ภาษา' }, { num: 3, desc: 'ห้อง Lab ภาษา' }, { num: 2, desc: 'ห้องเรียน' }, { num: 1, desc: 'ประชาสัมพันธ์' }]
  },
  {
    id: 'bld-13', num: '13', name: '13. อาคารศูนย์วิทยาศาสตร์ (SCB)', shortName: '13',
    sub: 'ศูนย์ปฏิบัติการวิทยาศาสตร์ เครื่องมือวิเคราะห์ขั้นสูง และห้องแล็บวิจัย',
    category: 'อาคารวิทยาศาสตร์และวิจัย', status: 'เปิดทำการ 08:30 - 17:00 น.',
    archType: 'box', pos: { x: 191.96, y: 0.00, z: 54.40 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 20.0, h: 10.0, d: 12.0 }, roofColor: 0x1e293b, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องปฏิบัติการเคมี' }, { num: 3, desc: 'ห้องปฏิบัติการฟิสิกส์' }, { num: 2, desc: 'ห้องชีววิทยา' }, { num: 1, desc: 'โถงนิทรรศการ' }]
  },
  {
    id: 'bld-14', num: '14', name: '14. อาคารเรียนคณะเทคโนโลยีการเกษตร', shortName: '14',
    sub: 'อาคารเรียนและห้องปฏิบัติการเทคโนโลยีการผลิตพืชและสัตว์',
    category: 'อาคารเรียนและเกษตร', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 135.08, y: 0.00, z: 54.40 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 18.0, h: 9.0, d: 12.0 }, roofColor: 0x15803d, accentColor: 0x16a34a,
    floors: [{ num: 3, desc: 'ห้องเรียน' }, { num: 2, desc: 'ห้องพักอาจารย์' }, { num: 1, desc: 'โถงต้อนรับ' }]
  },
  {
    id: 'bld-15', num: '15', name: '15. คณะเทคโนโลยีการเกษตร (FAT)', shortName: '15',
    sub: 'สำนักงานคณบดีคณะเทคโนโลยีการเกษตร และศูนย์วิจัยแปรรูปผลผลิตทางการเกษตร',
    category: 'สำนักงานคณะและวิจัย', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 94.91, y: 0.00, z: 79.56 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 16.3, h: 9.0, d: 20.3 }, roofColor: 0x166534, accentColor: 0x16a34a,
    floors: [{ num: 3, desc: 'สำนักงานคณบดี' }, { num: 2, desc: 'ห้องประชุมคณะ' }, { num: 1, desc: 'บริการวิชาการ' }]
  },
  {
    id: 'bld-16', num: '16', name: '16. อาคารเรียนคณะครุศาสตร์', shortName: '16',
    sub: 'อาคารเรียนรวมคณะครุศาสตร์ ศูนย์พัฒนาวิชาชีพครู (ปีกทิศเหนือ)',
    category: 'อาคารเรียนและฝึกอบรม', status: 'เปิดทำการ 08:00 - 17:00 น.',
    archType: 'box', pos: { x: 179.87, y: 0.00, z: 68.34 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 23.4, h: 10.0, d: 7.6 }, roofColor: 0x991b1b, accentColor: 0xdc2626,
    floors: [{ num: 4, desc: 'ห้องเรียนรวม' }, { num: 3, desc: 'ห้องบรรยาย' }, { num: 2, desc: 'ห้องปฏิบัติการสอน' }, { num: 1, desc: 'โถงนิทรรศการ' }]
  },
  {
    id: 'bld-17', num: '17', name: '17. คณะครุศาสตร์ (FE)', shortName: '17',
    sub: 'สำนักงานคณบดีคณะครุศาสตร์ คณะแห่งแรกและประวัติศาสตร์ของมหาวิทยาลัย (ปีกทิศใต้)',
    category: 'สำนักงานคณะ', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 226.79, y: 0.00, z: 108.80 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 25.4, h: 10.0, d: 9.2 }, roofColor: 0x7f1d1d, accentColor: 0xdc2626,
    floors: [{ num: 4, desc: 'สำนักงานคณบดี' }, { num: 3, desc: 'ห้องประชุมครุศาสตร์' }, { num: 2, desc: 'ฝ่ายวิชาการ' }, { num: 1, desc: 'โถงต้อนรับ' }]
  },
  {
    id: 'bld-18', num: '18', name: '18. อาคารกองพัฒนานักศึกษา', shortName: '18',
    sub: 'กองพัฒนานักศึกษา, องค์การบริหารนักศึกษา, กองทุน กยศ., และงานแนะแนว',
    category: 'อาคารบริการนักศึกษา', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 241.72, y: 0.00, z: 102.00 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 18.0, h: 9.0, d: 12.0 }, roofColor: 0x047857, accentColor: 0x059669,
    floors: [{ num: 3, desc: 'งานกองทุน กยศ.' }, { num: 2, desc: 'องค์การนักศึกษา' }, { num: 1, desc: 'จุดบริการนักศึกษา' }]
  },
  {
    id: 'bld-19', num: '19', name: '19. คณะวิทยาศาสตร์และเทคโนโลยี (FST)', shortName: '19',
    sub: 'สำนักงานคณบดีและอาคารเรียนคณะวิทยาศาสตร์และเทคโนโลยี อาคารแนวยาวฝั่งทิศเหนือ',
    category: 'สำนักงานคณะและวิจัย', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 181.29, y: 0.00, z: -69.36 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 61.2, h: 10.0, d: 12.4 }, roofColor: 0xd97706, accentColor: 0xf59e0b,
    floors: [{ num: 4, desc: 'สำนักงานคณบดี' }, { num: 3, desc: 'ห้องปฏิบัติการคอมพิวเตอร์' }, { num: 2, desc: 'ห้องเรียน' }, { num: 1, desc: 'โถงกิจกรรม' }]
  },
  {
    id: 'bld-20', num: '20', name: '20. อาคารพยาบาล และร้านค้า', shortName: '20',
    sub: 'ศูนย์บริการสาธารณสุขและพยาบาลปฐมพยาบาล ร้านสะดวกซื้อ และตู้บริการอัตโนมัติ',
    category: 'อาคารบริการสุขภาพและชุมชน', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 191.96, y: 0.00, z: -27.20 }, rotY: 0, anchorHeight: 8,
    dimensions: { w: 16.0, h: 5.0, d: 10.0 }, roofColor: 0x0284c7, accentColor: 0x0ea5e9,
    floors: [{ num: 2, desc: 'ห้องพักฟื้นและปฐมพยาบาล' }, { num: 1, desc: 'ร้านค้าสะดวกซื้อ' }]
  },
  {
    id: 'bld-23', num: '23', name: '23. อาคาร 60 ปี วไลยอลงกรณ์', shortName: '23',
    sub: 'อาคาร 60 ปี วไลยอลงกรณ์ และศูนย์ฝึกปฏิบัติการคหกรรมศาสตร์',
    category: 'อาคารเรียนและปฏิบัติการ', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 78.20, y: 0.00, z: -71.40 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 22.0, h: 9.0, d: 12.0 }, roofColor: 0x15803d, accentColor: 0x16a34a,
    floors: [{ num: 3, desc: 'ห้องปฏิบัติการคหกรรม' }, { num: 2, desc: 'ห้องเรียน' }, { num: 1, desc: 'โถงนิทรรศการ' }]
  },
  {
    id: 'bld-28', num: '28', name: '28. คณะวิทยาการจัดการ (FMS)', shortName: '28',
    sub: 'สำนักงานคณบดีและอาคารเรียนคณะวิทยาการจัดการ หลังคาสีแดงส้มฝั่งตะวันตก',
    category: 'สำนักงานคณะและเรียนรวม', status: 'เปิดทำการ 08:00 - 18:00 น.',
    archType: 'box', pos: { x: -147.52, y: 0.00, z: -20.74 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 16.3, h: 9.0, d: 12.2 }, roofColor: 0x991b1b, accentColor: 0xdc2626,
    floors: [{ num: 3, desc: 'สำนักงานคณบดี' }, { num: 2, desc: 'ห้องเรียน MBA' }, { num: 1, desc: 'โถงกิจกรรม' }]
  },
  {
    id: 'bld-29', num: '29', name: '29. อาคารเรียนรวมวิทยาศาสตร์ (SCC2)', shortName: '29',
    sub: 'อาคารเรียนรวมวิทยาศาสตร์ SCC2 และห้องปฏิบัติการพื้นฐาน',
    category: 'อาคารเรียนรวม', status: 'เปิดทำการ 08:00 - 17:00 น.',
    archType: 'box', pos: { x: 14.22, y: 0.00, z: -71.40 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 20.0, h: 9.0, d: 12.0 }, roofColor: 0x334155, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องบรรยาย' }, { num: 3, desc: 'ห้องปฏิบัติการ' }, { num: 2, desc: 'ห้องเรียน' }, { num: 1, desc: 'โถงอาคาร' }]
  },
  {
    id: 'bld-30', num: '30', name: '30. โรงเรียนสาธิตฯ (ฝ่ายมัธยม)', shortName: '30',
    sub: 'โรงเรียนสาธิตมหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์ (ฝ่ายมัธยม)',
    category: 'โรงเรียนสาธิต', status: 'เปิดทำการ 07:30 - 16:30 น.',
    archType: 'box', pos: { x: -332.01, y: 0.00, z: 13.60 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 26.0, h: 10.0, d: 16.0 }, roofColor: 0x166534, accentColor: 0x16a34a,
    floors: [{ num: 3, desc: 'ห้องเรียนมัธยมปลาย' }, { num: 2, desc: 'ห้องเรียนมัธยมต้น' }, { num: 1, desc: 'สำนักงานโรงเรียน' }]
  },
  {
    id: 'bld-31', num: '31', name: '31. สำนักวิทยบริการและเทคโนโลยีสารสนเทศ (หอสมุดกลาง)', shortName: '31',
    sub: 'หอสมุดกลาง อาคารหลังคาสีส้มพีชริมสระน้ำใหญ่ Co-Working Space ศูนย์การเรียนรู้ดิจิทัล',
    category: 'อาคารหอสมุดและวิทยบริการ', status: 'เปิดบริการ 08:00 - 20:00 น.',
    archType: 'box', pos: { x: -20.97, y: 0.00, z: 121.04 }, rotY: 0, anchorHeight: 16,
    dimensions: { w: 34.6, h: 13.0, d: 28.5 }, roofColor: 0xea580c, accentColor: 0xf97316,
    floors: [{ num: 4, desc: 'ห้องศึกษาค้นคว้าเดี่ยว' }, { num: 3, desc: 'คลังหนังสือวิชาการ' }, { num: 2, desc: 'ห้องบริการมัลติมีเดีย' }, { num: 1, desc: 'โถงยืม-คืนหนังสือ' }]
  },
  {
    id: 'bld-36', num: '36', name: '36. เรือนเจ้าฟ้า (เรือนไทยวไลยอลงกรณ์)', shortName: '36',
    sub: 'เรือนไทยไม้สักประยุกต์ ศูนย์อนุรักษ์ศิลปวัฒนธรรม ตั้งตระหง่านกลางสระน้ำใหญ่',
    category: 'อาคารอนุรักษ์ศิลปวัฒนธรรม', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'thaiPavilion', pos: { x: -2.49, y: 0.00, z: -2.04 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 8.5, h: 6.5, d: 8.0 }, roofColor: 0xb45309, accentColor: 0xd97706,
    floors: [{ num: 2, desc: 'ชานเรือนและหอจัดแสดงพระราชประวัติ' }, { num: 1, desc: 'ใต้ถุนเรือนไทยริมสระบัว' }]
  },
  {
    id: 'bld-37', num: '37', name: '37. อาคารฝ่ายยานพาหนะ', shortName: '37',
    sub: 'ฝ่ายยานพาหนะ โรงจอดรถรางไฟฟ้า และศูนย์ซ่อมบำรุงรถส่วนกลาง',
    category: 'อาคารบริการและยานพาหนะ', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: -156.41, y: 0.00, z: 54.40 }, rotY: 0, anchorHeight: 8,
    dimensions: { w: 18.0, h: 5.5, d: 12.0 }, roofColor: 0x475569, accentColor: 0x64748b,
    floors: [{ num: 2, desc: 'สำนักงานฝ่ายยานพาหนะ' }, { num: 1, desc: 'โรงจอดรถและสถานีชาร์จ EV' }]
  },
  {
    id: 'bld-38', num: '38', name: '38. อาคารปฏิบัติการเทคโนโลยีอุตสาหกรรม', shortName: '38',
    sub: 'อาคารปฏิบัติการทางวิศวกรรม โรงประลองเครื่องกล ไฟฟ้า และยานยนต์',
    category: 'โรงประลองและปฏิบัติการ', status: 'เปิดทำการ 08:30 - 17:00 น.',
    archType: 'box', pos: { x: -305.00, y: 0.00, z: 47.60 }, rotY: 0, anchorHeight: 10,
    dimensions: { w: 24.0, h: 7.0, d: 7.0 }, roofColor: 0x9a3412, accentColor: 0xc2410c,
    floors: [{ num: 2, desc: 'ห้องปฏิบัติการ CAD/CAM' }, { num: 1, desc: 'โรงประลองเครื่องกล' }]
  },
  {
    id: 'bld-39', num: '39', name: '39. คณะเทคโนโลยีอุตสาหกรรม (FIT)', shortName: '39',
    sub: 'สำนักงานคณบดีคณะเทคโนโลยีอุตสาหกรรม และห้องปฏิบัติการวิศวกรรม',
    category: 'สำนักงานคณะและวิศวกรรม', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: -305.00, y: 0.00, z: 88.40 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 24.0, h: 10.0, d: 9.0 }, roofColor: 0x7c2d12, accentColor: 0xc2410c,
    floors: [{ num: 3, desc: 'สำนักงานคณบดี' }, { num: 2, desc: 'ห้องปฏิบัติการไฟฟ้า' }, { num: 1, desc: 'โถงกิจกรรม' }]
  },
  {
    id: 'bld-40', num: '40', name: '40. หอพักโกเมน', shortName: '40',
    sub: 'หอพักนักศึกษาหญิงในกำกับมหาวิทยาลัย (อาคารโกเมน แถวกลางเหนือ)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -350.85, y: 0.00, z: 12.24 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 24.4, h: 12.0, d: 6.5 }, roofColor: 0xd97706, accentColor: 0xf59e0b,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงต้อนรับและร้านสะดวกซื้อ' }]
  },
  {
    id: 'bld-41', num: '41', name: '41. หอพักเพทาย', shortName: '41',
    sub: 'หอพักนักศึกษาหญิงในกำกับมหาวิทยาลัย (อาคารเพทาย แถวกลางใต้)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -347.65, y: 0.00, z: 32.64 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 26.3, h: 12.0, d: 5.4 }, roofColor: 0xd97706, accentColor: 0xf59e0b,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงต้อนรับ' }]
  },
  {
    id: 'bld-42', num: '42', name: '42. ยิมเนเซียม 2', shortName: '42',
    sub: 'อาคารพลศึกษาและสนามกีฬาในร่ม 2 ศูนย์ฝึกซ้อมนักกีฬา',
    category: 'สนามกีฬาและนันทนาการ', status: 'เปิดบริการ 08:00 - 21:00 น.',
    archType: 'box', pos: { x: -376.80, y: 0.00, z: -17.00 }, rotY: 0, anchorHeight: 10,
    dimensions: { w: 16.5, h: 7.5, d: 5.5 }, roofColor: 0x0284c7, accentColor: 0x0284c7,
    floors: [{ num: 2, desc: 'อัฒจันทร์' }, { num: 1, desc: 'สนามฝึกซ้อม' }]
  },
  {
    id: 'bld-43', num: '43', name: '43. หอพักนักศึกษา 1', shortName: '43',
    sub: 'หอพักนักศึกษา อาคาร 1 (แถวบนสุด ทิศเหนือ)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -344.81, y: 0.00, z: -6.12 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 11.1, h: 12.0, d: 4.9 }, roofColor: 0xf8fafc, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงบริการ' }]
  },
  {
    id: 'bld-44', num: '44', name: '44. หอพักนักศึกษา 2', shortName: '44',
    sub: 'หอพักนักศึกษา อาคาร 2 (แถวล่าง ฝั่งทิศตะวันตก)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -349.07, y: 0.00, z: 72.42 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 10.9, h: 12.0, d: 5.3 }, roofColor: 0xf8fafc, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงบริการ' }]
  },
  {
    id: 'bld-45', num: '45', name: '45. หอพักนักศึกษา 3', shortName: '45',
    sub: 'หอพักนักศึกษา อาคาร 3 (แถวล่าง ฝั่งทิศตะวันออก)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -296.11, y: 0.00, z: 75.82 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 10.9, h: 12.0, d: 5.4 }, roofColor: 0xf8fafc, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงบริการ' }]
  },
  {
    id: 'bld-49', num: '49', name: '49. หอพักนักศึกษานานาชาติ', shortName: '49',
    sub: 'หอพักนักศึกษานานาชาติและนักศึกษาโครงการพิเศษ',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -327.04, y: 0.00, z: 95.20 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 20.0, h: 12.0, d: 14.0 }, roofColor: 0x475569, accentColor: 0x0ea5e9,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงต้อนรับ' }]
  },
  {
    id: 'bld-53', num: '53', name: '53. ศูนย์ อพ.สธ.', shortName: '53',
    sub: 'ศูนย์ประสานงานโครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริ (อพ.สธ.)',
    category: 'ศูนย์อนุรักษ์และวิจัย', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: -497.66, y: 0.00, z: 115.60 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 18.0, h: 6.5, d: 12.0 }, roofColor: 0x15803d, accentColor: 0x16a34a,
    floors: [{ num: 2, desc: 'ห้องปฏิบัติการเพาะเลี้ยงเนื้อเยื่อ' }, { num: 1, desc: 'ศูนย์เรียนรู้พันธุ์พืช' }]
  },
  {
    id: 'bld-55', num: '55', name: '55. Valaya Hub & Resort', shortName: '55',
    sub: 'Valaya Hub ศูนย์นวัตกรรมการเรียนรู้และที่พักรีสอร์ทเพื่อการศึกษา',
    category: 'ศูนย์การเรียนรู้และที่พัก', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -550.98, y: 0.00, z: 115.60 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 18.0, h: 6.0, d: 12.0 }, roofColor: 0x92400e, accentColor: 0xd97706,
    floors: [{ num: 2, desc: 'ห้องพักรับรอง' }, { num: 1, desc: 'Co-Working Space & Cafe' }]
  },
  {
    id: 'bld-57', num: '57', name: '57. สนามกีฬากลาง มรภ.วไลยอลงกรณ์ฯ', shortName: '57',
    sub: 'สนามฟุตบอลหญ้าจริง ลู่วิ่งสังเคราะห์มาตรฐาน 400 เมตร 8 ลู่ และอัฒจันทร์ประธาน',
    category: 'สนามกีฬาและนันทนาการ', status: 'เปิดบริการ 06:00 - 21:00 น.',
    archType: 'stadium', pos: { x: -505.13, y: 0.00, z: 45.90 }, rotY: 0, anchorHeight: 8,
    dimensions: { w: 27.3, h: 4.0, d: 49.0 }, roofColor: 0xdc2626, accentColor: 0x16a34a,
    floors: [{ num: 1, desc: 'สนามฟุตบอล ลู่วิ่ง 400 เมตร และอัฒจันทร์ประธาน' }]
  }
];

const BUILDINGS_MAP = {};
HOSPITAL_BUILDINGS.forEach(b => { BUILDINGS_MAP[b.id] = b; });

// Three.js Core Globals
let scene, camera, renderer, controls;
let groundMesh, baseBlockMesh;
let roadsGroup, waterGroup, buildingsGroup, treesGroup;
let ambientLight, sunLight;
const buildingMeshes = new Map();
const labelElements = new Map();
const emissiveMaterials = [];

const state = {
  selectedId: null,
  dayMode: true,
  turntable: false,
  showLabels: true,
  showWalkways: true,
  viewMode: 'topographic'
};

// Initialize Three.js Scene
function initScene() {
  const canvasEl = document.getElementById('world');
  const w = window.innerWidth;
  const h = window.innerHeight;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xF5F0EF); // Maps3D groundColor

  // Camera calibrated for 1480m x 408m campus view
  camera = new THREE.PerspectiveCamera(40, w / h, 1.0, 5000);
  window.camera = camera;

  const isPortrait = h > w;
  if (isPortrait) {
    camera.position.set(120, 850, 680);
  } else {
    camera.position.set(120, 680, 520);
  }

  renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = false; // maps3d config: sun.shadows = false

  // OrbitControls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  window.controls = controls;
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.maxPolarAngle = Math.PI / 2 - 0.04;
  controls.minDistance = 20;
  controls.maxDistance = 2200;
  controls.target.set(80, 0, 30);
  controls.update();

  // Lighting (Maps3D sun config: azimuth 134 deg, elevation 46 deg)
  ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);

  sunLight = new THREE.DirectionalLight(0xfff7ed, 1.3);
  setSunLight(134, 46, 1.3, 0.9);
  scene.add(sunLight);

  // Groups
  roadsGroup = new THREE.Group();
  waterGroup = new THREE.Group();
  buildingsGroup = new THREE.Group();
  treesGroup = new THREE.Group();
  scene.add(roadsGroup);
  scene.add(waterGroup);
  scene.add(buildingsGroup);
  scene.add(treesGroup);

  // Build the complete 3D scene from maps3d-project data
  buildMaps3DBase();
  buildMaps3DRoads();
  buildMaps3DWater();
  buildMaps3DBuildings();
  buildMaps3DTrees();

  // UI & Event Bindings
  create3DLabels();
  setupUI();
  setupInteractivity();
  setupSearch();
  initClock();
  dismissLoading();

  window.addEventListener('resize', onWindowResize);
}

function dismissLoading() {
  const loading = document.getElementById('loading');
  const bar = document.getElementById('loadingBar');
  if (bar) bar.style.width = '100%';
  if (loading) {
    setTimeout(() => {
      loading.classList.add('hide');
      setTimeout(() => { loading.style.display = 'none'; }, 600);
    }, 150);
  }
}

// 1. Scene Base Slab (1480.9m x 408.0m with 31m solid extrusion)
function buildMaps3DBase() {
  const bw = 1480.9;
  const bd = 408.0;
  const baseH = 31.0; // target model thickness from Maps3D

  // Solid Extruded Base Block below ground
  const baseGeo = new THREE.BoxGeometry(bw, baseH, bd);
  const baseMat = new THREE.MeshStandardMaterial({
    color: 0xF5F0EF, // sideColor / groundColor
    roughness: 0.9,
    metalness: 0.02
  });
  baseBlockMesh = new THREE.Mesh(baseGeo, baseMat);
  baseBlockMesh.position.set(0, -baseH / 2, 0);
  baseBlockMesh.receiveShadow = true;
  scene.add(baseBlockMesh);

  // Top Surface Ground Plane
  const groundGeo = new THREE.PlaneGeometry(bw, bd);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0xF5F0EF,
    roughness: 0.85,
    metalness: 0.02
  });
  groundMesh = new THREE.Mesh(groundGeo, groundMat);
  groundMesh.rotation.x = -Math.PI / 2;
  groundMesh.position.set(0, 0.01, 0);
  groundMesh.receiveShadow = true;
  scene.add(groundMesh);

  // Crisp Base Border Outline
  const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(bw, 0.2, bd));
  const lineMat = new THREE.LineBasicMaterial({ color: 0x94a3b8, linewidth: 2 });
  const borderLine = new THREE.LineSegments(edges, lineMat);
  borderLine.position.set(0, 0.1, 0);
  scene.add(borderLine);
}

// 2. Roads Layer (Real OSM road vectors extruded to height 3m with exact widths, color #B0B4C0)
function buildMaps3DRoads() {
  roadsGroup.clear();

  const roadMat = new THREE.MeshStandardMaterial({
    color: 0xB0B4C0, // maps3d roads.color (#B0B4C0)
    roughness: 0.75,
    metalness: 0.05
  });

  const curbMat = new THREE.MeshStandardMaterial({
    color: 0x94a3b8,
    roughness: 0.6,
    metalness: 0.1
  });

  const roadHeight = 0.6; // subtle raised road surface

  MAPS3D_VECTORS.roads.forEach(r => {
    const pts = r.pts;
    if (pts.length < 2) return;
    const w = r.width || 4.0;

    for (let i = 0; i < pts.length - 1; i++) {
      const p1 = new THREE.Vector2(pts[i][0], pts[i][1]);
      const p2 = new THREE.Vector2(pts[i+1][0], pts[i+1][1]);
      const len = p1.distanceTo(p2);
      if (len < 0.5) continue;

      const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
      const midX = (p1.x + p2.x) / 2;
      const midZ = (p1.y + p2.y) / 2;

      // Road Segment Box
      const segGeo = new THREE.BoxGeometry(len, roadHeight, w);
      const seg = new THREE.Mesh(segGeo, roadMat);
      seg.position.set(midX, roadHeight / 2 + 0.02, midZ);
      seg.rotation.y = -angle;
      seg.receiveShadow = true;
      roadsGroup.add(seg);

      // Curbs on arterial / collector
      if (w >= 6.0) {
        for (let side of [-1, 1]) {
          const curb = new THREE.Mesh(new THREE.BoxGeometry(len, roadHeight + 0.15, 0.3), curbMat);
          curb.position.set(midX, (roadHeight + 0.15) / 2 + 0.02, midZ + side * (w / 2));
          curb.rotation.y = -angle;
          roadsGroup.add(curb);
        }
      }
    }
  });
}

// 3. Water Layer (Canals & ponds from OSM, color #98DCFF, opacity 0.7)
function buildMaps3DWater() {
  waterGroup.clear();

  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x98DCFF, // maps3d water.color (#98DCFF)
    roughness: 0.15,
    metalness: 0.85,
    transparent: true,
    opacity: 0.70 // maps3d water.opacity: 0.7
  });

  const waterHeight = 0.3;

  MAPS3D_VECTORS.water.forEach(wt => {
    const pts = wt.pts;
    if (pts.length < 2) return;
    const w = 5.0; // canal width

    for (let i = 0; i < pts.length - 1; i++) {
      const p1 = new THREE.Vector2(pts[i][0], pts[i][1]);
      const p2 = new THREE.Vector2(pts[i+1][0], pts[i+1][1]);
      const len = p1.distanceTo(p2);
      if (len < 0.5) continue;

      const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
      const midX = (p1.x + p2.x) / 2;
      const midZ = (p1.y + p2.y) / 2;

      const seg = new THREE.Mesh(new THREE.BoxGeometry(len, waterHeight, w), waterMat);
      seg.position.set(midX, waterHeight / 2 + 0.02, midZ);
      seg.rotation.y = -angle;
      waterGroup.add(seg);
    }
  });

  // Natural Lotus Pond at Thai House (bld-36 at x=-2.5, z=27.2)
  const pond = new THREE.Mesh(new THREE.CylinderGeometry(28, 28, waterHeight, 32), waterMat);
  pond.position.set(-2.5, waterHeight / 2 + 0.02, 27.2);
  waterGroup.add(pond);

  // Sports Center Swimming Pool (bld-5 at x=558.8, z=-75.5)
  const pool = new THREE.Mesh(new THREE.BoxGeometry(25, waterHeight, 52), waterMat);
  pool.position.set(558.8, waterHeight / 2 + 0.02, -75.5);
  waterGroup.add(pool);
}

// 4. Buildings Layer (Extruded raised blocks, color #F1ECE1, edge rendering #475569)
function buildMaps3DBuildings() {
  buildingsGroup.clear();
  buildingMeshes.clear();

  const bldMat = new THREE.MeshStandardMaterial({
    color: 0xF1ECE1, // maps3d buildings.color (#F1ECE1)
    roughness: 0.45,
    metalness: 0.08
  });

  const roofMat = new THREE.MeshStandardMaterial({
    color: 0xe5e5e5,
    roughness: 0.5,
    metalness: 0.1
  });

  const edgeMat = new THREE.LineBasicMaterial({
    color: 0x475569, // maps3d building edgeRendering (#475569)
    linewidth: 2
  });

  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x98DCFF,
    roughness: 0.1,
    metalness: 0.8,
    transparent: true,
    opacity: 0.8,
    emissive: new THREE.Color(0xffbf69),
    emissiveIntensity: 0.1
  });
  emissiveMaterials.push(glassMat);

  HOSPITAL_BUILDINGS.forEach(bld => {
    const bGroup = new THREE.Group();
    bGroup.position.set(bld.pos.x, 0, bld.pos.z);
    bGroup.rotation.y = bld.rotY || 0;
    bGroup.userData = bld;

    const w = Math.max(12.0, bld.dimensions.w * 1.5);
    const d = Math.max(10.0, bld.dimensions.d * 1.5);
    const h = Math.max(9.0, Math.min(28.0, bld.dimensions.h * 1.2)); // 9m to 28m
    const podiumH = 0.8;

    // Podium Base
    const podium = new THREE.Mesh(new THREE.BoxGeometry(w + 1.2, podiumH, d + 1.2), bldMat);
    podium.position.set(0, podiumH / 2, 0);
    podium.receiveShadow = true;
    bGroup.add(podium);

    // Main Building Massing (Raised Placement)
    const towerGeo = new THREE.BoxGeometry(w, h, d);
    const tower = new THREE.Mesh(towerGeo, bldMat);
    tower.position.set(0, podiumH + h / 2, 0);
    tower.castShadow = true;
    tower.receiveShadow = true;
    bGroup.add(tower);

    // Edge Rendering (maps3d: edgeRendering = true, edgeWidth = 30)
    const edges = new THREE.EdgesGeometry(towerGeo);
    const wireframe = new THREE.LineSegments(edges, edgeMat);
    wireframe.position.copy(tower.position);
    bGroup.add(wireframe);

    // Ribbon Windows
    const numFloors = Math.max(1, Math.round(h / 3.2));
    const flH = h / numFloors;
    for (let f = 1; f <= numFloors; f++) {
      const winY = podiumH + (f - 0.5) * flH;
      const winN = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, flH * 0.45, 0.2), glassMat);
      winN.position.set(0, winY, -d / 2 - 0.05);
      bGroup.add(winN);

      const winS = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, flH * 0.45, 0.2), glassMat);
      winS.position.set(0, winY, d / 2 + 0.05);
      bGroup.add(winS);
    }

    // Rooftop Parapet
    const parapet = new THREE.Mesh(new THREE.BoxGeometry(w, 0.8, d), bldMat);
    parapet.position.set(0, podiumH + h + 0.4, 0);
    bGroup.add(parapet);

    // Rooftop Mechanical Box
    const pentW = Math.min(w * 0.35, 8.0);
    const pentD = Math.min(d * 0.35, 6.0);
    const pentH = 2.8;
    const penthouse = new THREE.Mesh(new THREE.BoxGeometry(pentW, pentH, pentD), roofMat);
    penthouse.position.set(w * 0.15, podiumH + h + pentH / 2 + 0.4, -d * 0.15);
    bGroup.add(penthouse);

    buildingsGroup.add(bGroup);
    buildingMeshes.set(bld.id, bGroup);
  });
}

// 5. Trees Layer (Procedural placement according to maps3d config: color #4a7c3a, scale 0.9, density 0.005)
function buildMaps3DTrees() {
  treesGroup.clear();

  const treeMat = new THREE.MeshStandardMaterial({
    color: 0x4a7c3a, // maps3d trees.color (#4a7c3a)
    roughness: 0.9,
    metalness: 0.0
  });
  const trunkMat = new THREE.MeshStandardMaterial({
    color: 0x78350f,
    roughness: 0.9,
    metalness: 0.0
  });

  const treeGeo = new THREE.ConeGeometry(3.6, 7.5, 6);
  const trunkGeo = new THREE.CylinderGeometry(0.5, 0.7, 2.5, 6);

  // Distribute trees around open green zones with 4m clearance
  const treeClusters = [
    { cx: -20, cz: 40, rx: 60, rz: 40, count: 18 },
    { cx: 200, cz: 50, rx: 80, rz: 35, count: 22 },
    { cx: 450, cz: -50, rx: 70, rz: 30, count: 16 },
    { cx: -350, cz: 30, rx: 80, rz: 50, count: 20 },
    { cx: -580, cz: -30, rx: 90, rz: 40, count: 24 }
  ];

  treeClusters.forEach(c => {
    for (let i = 0; i < c.count; i++) {
      const angle = (i / c.count) * Math.PI * 2 + (i % 3) * 0.4;
      const dist = (0.2 + (i % 5) * 0.18) * Math.min(c.rx, c.rz);
      const tx = c.cx + Math.cos(angle) * dist;
      const tz = c.cz + Math.sin(angle) * dist;

      const tGroup = new THREE.Group();
      tGroup.position.set(tx, 0, tz);
      tGroup.scale.setScalar(0.9); // maps3d trees.scale = 0.9

      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 1.25;
      tGroup.add(trunk);

      const crown = new THREE.Mesh(treeGeo, treeMat);
      crown.position.y = 2.5 + 3.75;
      crown.castShadow = true;
      tGroup.add(crown);

      treesGroup.add(tGroup);
    }
  });
}

// 6. 3D Floating Pin Number Badges
function create3DLabels() {
  const container = document.getElementById('labelsContainer');
  if (!container) return;
  container.innerHTML = '';
  labelElements.clear();

  HOSPITAL_BUILDINGS.forEach(bld => {
    const pin = document.createElement('div');
    pin.className = 'label-pin';
    pin.id = 'label-' + bld.id;
    pin.setAttribute('data-id', bld.id);

    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = bld.num;
    pin.appendChild(name);

    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      selectBuilding(bld.id, true);
    });

    container.appendChild(pin);
    labelElements.set(bld.id, { element: pin, data: bld });
  });
}

function updateLabelPositions() {
  const container = document.getElementById('labelsContainer');
  if (!container) return;

  const w = window.innerWidth;
  const h = window.innerHeight;
  const isPortrait = h > w;
  const maxDist = isPortrait ? 1200 : 1500;

  const camPos = camera.position;
  const camDir = new THREE.Vector3();
  camera.getWorldDirection(camDir);

  labelElements.forEach(({ element, data }) => {
    const anchorY = Math.max(16.0, data.dimensions.h * 1.5 + 5.0);
    const tempV = new THREE.Vector3(data.pos.x, anchorY, data.pos.z);

    const toAnchor = new THREE.Vector3(data.pos.x - camPos.x, anchorY - camPos.y, data.pos.z - camPos.z);
    const dist = toAnchor.length();
    const dot = toAnchor.dot(camDir);

    if (dot <= 0 || dist > maxDist || !state.showLabels) {
      element.style.display = 'none';
      return;
    }

    tempV.project(camera);
    if (tempV.z > 1.0) {
      element.style.display = 'none';
      return;
    }

    const screenX = (tempV.x * 0.5 + 0.5) * w;
    const screenY = (-(tempV.y * 0.5) + 0.5) * h;

    if (screenX < -20 || screenX > w + 20 || screenY < -20 || screenY > h + 20) {
      element.style.display = 'none';
      return;
    }

    element.style.display = 'flex';
    element.style.left = `${screenX}px`;
    element.style.top = `${screenY}px`;
  });
}

// Sun & Light Settings (azimuth 134 deg, elevation 46 deg)
function setSunLight(azDeg, elDeg, power, amb) {
  state.dayMode = true;
  const azRad = THREE.MathUtils.degToRad(azDeg);
  const elRad = THREE.MathUtils.degToRad(elDeg);
  const dist = 1200;
  sunLight.position.set(
    dist * Math.cos(elRad) * Math.sin(azRad),
    dist * Math.sin(elRad),
    dist * Math.cos(elRad) * Math.cos(azRad)
  );
  sunLight.intensity = power;
  ambientLight.intensity = amb;
}

function setDayMode(isDay) {
  state.dayMode = isDay;
  if (isDay) {
    scene.background.setHex(0xF5F0EF); // Maps3D groundColor
    ambientLight.color.setHex(0xffffff);
    ambientLight.intensity = 0.9;
    sunLight.intensity = 1.3;
    emissiveMaterials.forEach(m => { m.emissiveIntensity = 0.0; });
  } else {
    scene.background.setHex(0x0f172a);
    ambientLight.color.setHex(0x1e293b);
    ambientLight.intensity = 0.4;
    sunLight.intensity = 0.25;
    emissiveMaterials.forEach(m => { m.emissiveIntensity = 0.85; });
  }
}

// UI Bindings & Map Modal
function setupUI() {
  document.getElementById('reset')?.addEventListener('click', () => {
    focusOverview();
  });

  document.getElementById('brandReset')?.addEventListener('click', () => {
    focusOverview();
  });

  document.getElementById('turntable')?.addEventListener('click', () => {
    state.turntable = !state.turntable;
    document.getElementById('turntable')?.classList.toggle('active', state.turntable);
  });

  document.getElementById('toggleLabels')?.addEventListener('click', () => {
    state.showLabels = !state.showLabels;
    document.getElementById('toggleLabels')?.classList.toggle('active', state.showLabels);
    updateLabelPositions();
  });

  const collapseToolbarBtn = document.getElementById('collapseToolbar');
  const toolbar = document.querySelector('.toolbar');
  collapseToolbarBtn?.addEventListener('click', () => {
    if (!toolbar) return;
    const isCollapsed = toolbar.classList.toggle('collapsed');
    collapseToolbarBtn.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
    collapseToolbarBtn.innerHTML = isCollapsed ? '› เมนู' : '‹';
    collapseToolbarBtn.title = isCollapsed ? 'ขยายแถบเมนูนำทาง' : 'ย่อแถบเมนูนำทาง';
  });

  document.getElementById('fullscreenTop')?.addEventListener('click', toggleFullscreen);
  document.getElementById('toggleUI')?.addEventListener('click', toggleFullscreen);

  // Light toggle
  const lightToggle = document.getElementById('lightToggle');
  const lightPanel = document.getElementById('lightPanel');
  const closeLight = document.getElementById('closeLight');
  lightToggle?.addEventListener('click', () => {
    lightPanel.hidden = !lightPanel.hidden;
  });
  closeLight?.addEventListener('click', () => {
    lightPanel.hidden = true;
  });

  document.querySelectorAll('.light-presets button').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.light;
      if (mode === 'morning') {
        setSunLight(-120, 30, 1.2, 0.5);
      } else if (mode === 'noon') {
        setSunLight(-40, 75, 1.5, 0.7);
      } else if (mode === 'evening') {
        setSunLight(134, 46, 1.3, 0.9); // Maps3D default
      } else if (mode === 'night') {
        setDayMode(false);
      }
    });
  });

  setupMapModal();
}

function focusOverview() {
  state.selectedId = null;
  const isPortrait = window.innerHeight > window.innerWidth;
  const targetPos = isPortrait ? { x: 120, y: 850, z: 680 } : { x: 120, y: 680, z: 520 };
  const targetLook = { x: 80, y: 0, z: 30 };

  if (window.TWEEN) {
    new TWEEN.Tween(camera.position)
      .to(targetPos, 1200)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();
    new TWEEN.Tween(controls.target)
      .to(targetLook, 1200)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();
  } else {
    camera.position.set(targetPos.x, targetPos.y, targetPos.z);
    controls.target.set(targetLook.x, targetLook.y, targetLook.z);
  }
}

function selectBuilding(bldId, zoomIn = true) {
  const bld = BUILDINGS_MAP[bldId];
  if (!bld) return;
  state.selectedId = bldId;

  if (zoomIn) {
    const camTarget = { x: bld.pos.x, y: 0, z: bld.pos.z };
    const camPos = {
      x: bld.pos.x + 90,
      y: 90,
      z: bld.pos.z + 110
    };

    if (window.TWEEN) {
      new TWEEN.Tween(camera.position)
        .to(camPos, 1000)
        .easing(TWEEN.Easing.Cubic.Out)
        .start();
      new TWEEN.Tween(controls.target)
        .to(camTarget, 1000)
        .easing(TWEEN.Easing.Cubic.Out)
        .start();
    } else {
      camera.position.set(camPos.x, camPos.y, camPos.z);
      controls.target.set(camTarget.x, camTarget.y, camTarget.z);
    }
  }

  showBuildingDetail(bld);
}

function showBuildingDetail(bld) {
  const detail = document.getElementById('detail');
  if (!detail) return;

  document.getElementById('detailNum').textContent = bld.num;
  document.getElementById('detailName').textContent = bld.name;
  document.getElementById('detailCategory').textContent = bld.category;
  document.getElementById('detailSub').textContent = bld.sub;
  document.getElementById('detailStatus').textContent = bld.status;

  const floorsList = document.getElementById('detailFloors');
  if (floorsList && bld.floors) {
    floorsList.innerHTML = '';
    bld.floors.forEach(fl => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>ชั้น ${fl.num}:</strong> ${fl.desc}`;
      floorsList.appendChild(li);
    });
  }

  detail.hidden = false;
  detail.classList.add('visible');
}

function setupInteractivity() {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  window.addEventListener('click', (e) => {
    if (e.target.closest('.top') || e.target.closest('.toolbar') || e.target.closest('.detail') || e.target.closest('.popover')) return;

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(buildingsGroup.children, true);
    if (intersects.length > 0) {
      let obj = intersects[0].object;
      while (obj && !obj.userData?.id && obj.parent) {
        obj = obj.parent;
      }
      if (obj && obj.userData?.id) {
        selectBuilding(obj.userData.id, true);
      }
    }
  });

  document.getElementById('closeDetail')?.addEventListener('click', () => {
    const detail = document.getElementById('detail');
    if (detail) {
      detail.hidden = true;
      detail.classList.remove('visible');
    }
  });
}

function setupSearch() {
  const inp = document.getElementById('search');
  if (!inp) return;

  const res = document.createElement('div');
  res.id = 'searchResults';
  res.className = 'glass';
  res.style.cssText = 'position: absolute; top: 60px; left: 50%; transform: translateX(-50%); width: 340px; max-height: 280px; overflow-y: auto; border-radius: 10px; z-index: 100; display: none;';
  document.body.appendChild(res);

  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) { res.style.display = 'none'; return; }

    const matches = HOSPITAL_BUILDINGS.filter(b => 
      b.name.toLowerCase().includes(q) || 
      b.num.toLowerCase().includes(q) || 
      b.sub.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      res.innerHTML = '<div style="padding: 12px; font-size: 13px; color: var(--muted);">ไม่พบอาคารที่ค้นหา</div>';
      res.style.display = 'block';
      return;
    }

    res.innerHTML = '';
    matches.forEach(b => {
      const row = document.createElement('div');
      row.style.cssText = 'padding: 10px 14px; border-bottom: 1px solid rgba(0,0,0,0.06); cursor: pointer; transition: background 0.15s; font-size: 13px;';
      row.innerHTML = `<strong>${b.num}. ${b.name}</strong><br><small style="color: var(--muted);">${b.category}</small>`;
      row.addEventListener('mouseover', () => { row.style.background = 'var(--accent-soft)'; });
      row.addEventListener('mouseout', () => { row.style.background = 'transparent'; });
      row.addEventListener('click', () => {
        selectBuilding(b.id, true);
        res.style.display = 'none';
        inp.value = '';
      });
      res.appendChild(row);
    });
    res.style.display = 'block';
  });

  document.addEventListener('click', (e) => {
    if (!inp.contains(e.target) && !res.contains(e.target)) {
      res.style.display = 'none';
    }
  });
}

function setupMapModal() {
  const mapBtn = document.getElementById('map');
  const modal = document.getElementById('mapModal');
  const closeBtn = document.getElementById('closeMapModal');
  mapBtn?.addEventListener('click', () => { modal.hidden = false; });
  closeBtn?.addEventListener('click', () => { modal.hidden = true; });
  modal?.addEventListener('click', (e) => { if (e.target === modal) modal.hidden = true; });
}

function initClock() {
  const el = document.getElementById('clock');
  function update() {
    const now = new Date();
    if (el) {
      el.textContent = now.toLocaleTimeString('th-TH', { hour12: false });
    }
  }
  update();
  setInterval(update, 1000);
}

function isFullscreenActive() {
  return !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement ||
    document.body.classList.contains('fullscreen-mode')
  );
}

function updateFullscreenButtons() {
  const isFs = isFullscreenActive();
  const topText = document.getElementById('fullscreenTopText');
  const dockBtn = document.getElementById('toggleUI');
  if (topText) topText.textContent = isFs ? 'ย่อจอ' : 'เต็มจอ';
  if (dockBtn) {
    dockBtn.textContent = isFs ? 'ย่อจอ' : 'เต็มจอ';
    dockBtn.title = isFs ? 'ย่อหน้าต่างกลับสู่ขนาดปกติ' : 'เปิดโหมดเต็มจอ';
    dockBtn.classList.toggle('active', isFs);
  }
}

function toggleFullscreen() {
  const isFs = isFullscreenActive();
  if (!isFs) {
    const el = document.documentElement;
    const rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if (rfs) {
      rfs.call(el).catch(() => {
        document.body.classList.toggle('fullscreen-mode');
        updateFullscreenButtons();
      });
    } else {
      document.body.classList.toggle('fullscreen-mode');
      updateFullscreenButtons();
    }
  } else {
    const efs = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
    if (efs && document.fullscreenElement) {
      efs.call(document).catch(() => {});
    }
    document.body.classList.remove('fullscreen-mode');
  }
  setTimeout(updateFullscreenButtons, 80);
}

function onWindowResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  updateLabelPositions();
}

// Main Animation Loop
function animate() {
  requestAnimationFrame(animate);

  if (window.TWEEN) TWEEN.update();

  if (state.turntable && controls) {
    scene.rotation.y += 0.002;
  } else if (scene.rotation.y !== 0) {
    scene.rotation.y = 0;
  }

  controls.update();
  renderer.render(scene, camera);
  updateLabelPositions();
}

// Boot
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    initScene();
    animate();
  });
} else {
  initScene();
  animate();
}
