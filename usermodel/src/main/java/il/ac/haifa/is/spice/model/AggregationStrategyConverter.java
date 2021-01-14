package il.ac.haifa.is.spice.model;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class AggregationStrategyConverter implements AttributeConverter<AggregationStrategy, String> {
 
    @Override
    public String convertToDatabaseColumn(AggregationStrategy strategy) {
        if (strategy == null) {
            return null;
        }
        return strategy.getCode();
    }

    @Override
    public AggregationStrategy convertToEntityAttribute(String code) {
        if (code == null) {
            return null;
        }

        return Stream.of(AggregationStrategy.values())
          .filter(c -> c.getCode().equals(code))
          .findFirst()
          .orElseThrow(IllegalArgumentException::new);
    }
}
