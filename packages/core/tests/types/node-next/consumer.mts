import { useAsync } from '@siberiacancode/reactuse'

const result = useAsync(async () => ['ok'])
export const values: string[] | undefined = result.data