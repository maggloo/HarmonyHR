import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: ['./src/**/*.graphql'],
  generates: {
    './src': {
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types.generated.ts',
        extension: '.generated.ts',
      },
    },
    './src/shared/types/types.generated.ts': { plugins: ['typescript'] },
  },
  ignoreNoDocuments: true,
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_BASE_APP_URL,
}

export default config
