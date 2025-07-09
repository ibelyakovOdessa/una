export interface DtoConvertible<TRequestDto, TResponseDto> {
  toRequestModel(): TRequestDto;
}

export interface DtoConvertibleConstructor<TRequestDto, TResponseDto, TEntity extends DtoConvertible<TRequestDto, TResponseDto>> {
  fromResponseModel(dto: TResponseDto): TEntity;
}