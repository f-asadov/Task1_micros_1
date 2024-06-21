import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type:'varchar',length: 50 })
  firstName: string;

  @Column({  type:'varchar',length: 50 })
  lastName: string;

  @Column({ type: 'int', width: 3 })
  age: number;

  @Column({ type: 'varchar', length: 20 })
  gender: string;

  @Column({ type: 'boolean', default: false })
  problems: boolean;
}
