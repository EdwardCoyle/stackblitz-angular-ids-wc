import { TestBed } from '@angular/core/testing';
import { ExampleSizesComponent } from './example-sizes.component';
describe('ExampleSizesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExampleSizesComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ExampleSizesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=example-sizes.component.spec.js.map