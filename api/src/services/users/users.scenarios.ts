import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: { one: { email: 'String4481176' }, two: { email: 'String4160298' } },
})

export type StandardScenario = typeof standard
