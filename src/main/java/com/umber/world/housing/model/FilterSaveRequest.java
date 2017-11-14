package com.umber.world.housing.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import lombok.*;
import java.io.Serializable;
import java.util.List;

@Getter
@ToString
@AllArgsConstructor
public class FilterSaveRequest {

    @Valid
    private List<String> type;

    @Valid
    private Integer minSqft;

    @Valid
    private Integer maxSqft;
    
    @Valid
    private Integer minPrice;
    
    @Valid
    private Integer maxPrice;
}
