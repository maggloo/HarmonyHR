import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    documents: ['./src/**/*.graphql'],
    generates: {
        './src': {
            plugins: ['typescript-operations', 'typescript-react-apollo'],
            preset: 'near-operation-file',
            presetConfig: {
                baseTypesPath: 'schema.types.ts',
                extension: '.types.ts',
            },
        },
        'src/shared/lib/apollo/schema.types.ts': { plugins: ['typescript'] },
    },
    ignoreNoDocuments: true,
    overwrite: true,
    schema: process.env.NEXT_PUBLIC_BASE_APP_URL,
}

export default config
