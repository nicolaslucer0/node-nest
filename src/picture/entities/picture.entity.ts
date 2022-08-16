import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'picture' })
export class Picture {
  @PrimaryGeneratedColumn({
    name: 'uuid',
    type: 'bigint',
  })
  uuid: string;

  @Column({ name: 'original_filename', nullable: false, default: '' })
  originalFilename: string;

  @Column({ name: 'rating' })
  rating: number;

  @Column({ name: 'approved' })
  approved: boolean;

  @Column({ name: 'real_pitch' })
  realPitch: number;

  @Column({ name: 'real_roll' })
  realRoll: number;

  @Column({ name: 'brightness' })
  brightness: number;

  @Column({ name: 'edition_required' })
  editionRequired: boolean;

  @Column({ name: 'is_cropped' })
  isCropped: boolean;

  @Column({ name: 'filename' })
  filename: string;

  @Column({ name: 'custom' })
  custom: boolean;
}
