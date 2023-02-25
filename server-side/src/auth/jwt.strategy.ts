import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config/dist'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PrismaService } from '..//prisma.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(configService: ConfigService, private prisma: PrismaService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: true,
			secretOrKey: configService.get('JWT_SECRET')
		})
	}

	async validate(payload: { sub: any; email: string }) {
		const user = await this.prisma.user.findUnique({
			where: {
				email: payload.email
			}
		})
		delete user.password
		return user
	}
}
