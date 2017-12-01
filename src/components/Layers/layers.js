import json from './data.json'
import Vue from 'vue'

export default {
  data() {
    return {
      json
    }
  },
  methods: {
    addLayer: function() {
      const layer3 = {
        "id": 3,
        "title": "Layer #3",
        "annotations": [
            {
                "id": "ann7",
                "label": "Annotation #7",
                "description": "This is a test for a new layer annotation",
                "layerId": 3
            }
        ]
      }
      json.layers.push(layer3)
    },
    deleteAnnotation: function() {
      json.layers[1].annotations = json.layers[1].annotations.filter(ann => ann.id !== 'ann5')
    },
    addAnnotation: function() {
      if (json.layers.length < 3) {
        return;
      }
      const newAnn = {
        "id": "ann8",
        "label": "Annotation #8",
        "description": "",
        "layerId": 3
      }
      json.layers[2].annotations.push(newAnn);
    },
    updateAnnotation: function() {
      const updatedAnn = {
        "id": "ann3",
        "label": "Annotation #3 Has Been Updated",
        "description": "",
        "layerId": 1
      }
      Vue.set(json.layers[0].annotations, 2, updatedAnn);
    }
  }
}