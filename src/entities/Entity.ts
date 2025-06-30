export interface Entity<TRequestDto, TResponseDto> {
  toDto(): TRequestDto;
}

export interface EntityConstructor<TRequestDto, TResponseDto, TEntity extends Entity<TRequestDto, TResponseDto>> {
  fromDto(dto: TResponseDto): TEntity;
}