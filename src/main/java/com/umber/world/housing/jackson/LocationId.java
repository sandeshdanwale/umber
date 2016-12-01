package com.umber.world.housing.jackson;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.umber.world.housing.domain.aggregate.AggregateId;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import org.springframework.data.annotation.PersistenceConstructor;

@Getter
@RequiredArgsConstructor(onConstructor = @__(@PersistenceConstructor))
@JsonSerialize
@JsonDeserialize
@EqualsAndHashCode(callSuper = false)
@ToString(callSuper = false)
public final class LocationId extends AggregateId{

	private static final long serialVersionUID = -925210535511442453L;

	@NotNull
	@Valid
	private final String registrationId;

}
