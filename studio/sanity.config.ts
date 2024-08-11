import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Carolina Caycedo',

  projectId: 'hgi5wws6',
  dataset: 'production',
  plugins: [structureTool({
    structure: (S) => 
      S.list()
      .title("Content")
      .items([
        S.listItem()
          .title("About Page")
          .id("aboutPage")
          .child(
            S.document()
              .schemaType("aboutPage")
              .documentId("aboutPage")
          ),
        S.listItem()
          .title("Splash Page")
          .id("splashPage")
          .child(
            S.document()
              .schemaType("splashPage")
              .documentId("splashPage")
          ),
          
      ])
  }

  ), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
