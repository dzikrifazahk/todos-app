import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'todo-list' })
export class TodosListEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        name: 'todo',
        type: 'varchar',
        nullable: false
    })
    todo: string;

    @Column({
        name: 'description',
        type: 'varchar',
        nullable: true
    })
    description: string;

    @Column({
        name: 'status',
        type: 'boolean',
        default: false
    })
    status: boolean;
}
